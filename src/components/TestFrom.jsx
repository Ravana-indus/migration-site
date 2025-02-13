import React, { useState, useEffect, useMemo } from 'react';

const RegistrationForm = () => {
  // Create auth header string from environment variables
  const authHeader = `token ${process.env.REACT_APP_FRAPPE_API_KEY}:${process.env.REACT_APP_FRAPPE_API_SECRET}`;
  
  // Memoize commonHeaders
  const commonHeaders = useMemo(() => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }), []); // Add dependencies if needed

  // Test connection when component mounts
  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch(
          '/api/resource/Meet%20and%20Fly%2024%20-%20Central%20And%20South?fields=["name1"]',
          { headers: commonHeaders }
        );
        const data = await response.json();
        console.log('Connection test successful:', data);
      } catch (error) {
        console.error('Connection test failed:', error);
      }
    };

    testConnection();
  }, [commonHeaders]);

  const [formData, setFormData] = useState({
    name1: '',
    mobile_number: '',
    email_id: '',
    nearest_city: '',
    are_you_coming_alone_to_the_event: '',
    do_you_or_have_3_passes_in_a_level: 0,
    a_level_results: [],
    please_upload_your_cv_here_less_then2_5_mb: null,
    can_you_take_ielts: '',
    pourpose: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Constants for dropdown options
  const cities = ["Kandy", "Matale", "Nuwara Eliya", "Galle", "Matara", "Hambantota"];

  const accompanimentOptions = [
    "Yes", "With 1 others", "With 2 others", "With 3 others", 
    "With 4 others", "With 5 others"
  ];

  const subjects = [
    "Biology", "Physics", "Chemistry", 
    "Combined Mathematics (Pure Mathematics and Applied Mathematics)"
  ];

  const ieltsOptions = [
    "Yes, Already have", "Yes", "No"
  ];

  const purposeOptions = [
    "Student Visa", "Work Visa", "Visit Visa / Refusal", "Other"
  ];

  // Utility function to get CSRF token from cookies (if needed by Frappe)
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  // Handle input changes, including checkbox
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value
    }));
  };

  // Handle file upload to Frappe
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2.5 * 1024 * 1024) {
      try {
        // Build FormData for file upload
        const fileFormData = new FormData();
        fileFormData.append('file', file);
        fileFormData.append('doctype', 'Meet and Fly 24 - Central And South');
        fileFormData.append('fieldname', 'please_upload_your_cv_here_less_then2_5_mb');

        const uploadResponse = await fetch('/api/method/upload_file', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            // Include auth & CSRF if needed
            'Authorization': authHeader,
            'X-Frappe-CSRF-Token': getCookie('csrf_token') || ''
          },
          body: fileFormData,
          credentials: 'include'
        });

        if (!uploadResponse.ok) throw new Error('File upload failed');
        const fileData = await uploadResponse.json();

        setFormData((prev) => ({
          ...prev,
          please_upload_your_cv_here_less_then2_5_mb: fileData.message.file_url
        }));
        setErrors((prev) => ({
          ...prev,
          please_upload_your_cv_here_less_then2_5_mb: ''
        }));
      } catch (error) {
        console.error('File upload error:', error);
        setErrors((prev) => ({
          ...prev,
          please_upload_your_cv_here_less_then2_5_mb: 'Failed to upload file'
        }));
      }
    } else {
      setErrors((prev) => ({
        ...prev,
        please_upload_your_cv_here_less_then2_5_mb: 'File size must be less than 2.5MB'
      }));
    }
  };

  // Dynamically add rows for A-Level results
  const handleAddResult = () => {
    setFormData((prev) => ({
      ...prev,
      a_level_results: [...prev.a_level_results, { subject: '', results: '' }]
    }));
  };

  // Update each A-Level result row
  const handleResultChange = (index, field, value) => {
    const newResults = [...formData.a_level_results];
    newResults[index] = {
      ...newResults[index],
      [field]: value
    };
    setFormData((prev) => ({
      ...prev,
      a_level_results: newResults
    }));
  };

  // Basic validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name1) newErrors.name1 = 'Name is required';
    if (!formData.mobile_number) newErrors.mobile_number = 'Mobile number is required';
    if (!formData.email_id) newErrors.email_id = 'Email is required';
    if (!formData.nearest_city) newErrors.nearest_city = 'City is required';
    if (!formData.are_you_coming_alone_to_the_event) {
      newErrors.are_you_coming_alone_to_the_event = 'This field is required';
    }
    if (!formData.can_you_take_ielts) newErrors.can_you_take_ielts = 'This field is required';
    if (!formData.pourpose) newErrors.pourpose = 'Purpose is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit main doc & child table docs
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Prepare main document data
      const docData = {
        doctype: 'Meet and Fly 24 - Central And South',
        ...formData,
        // Ensure checkbox is sent as int
        do_you_or_have_3_passes_in_a_level: formData.do_you_or_have_3_passes_in_a_level ? 1 : 0,
      };

      // 1) Create parent document
      const response = await fetch('/api/resource/Meet%20and%20Fly%2024%20-%20Central%20And%20South', {
        method: 'POST',
        headers: {
          ...commonHeaders,
          'Content-Type': 'application/json',
          'X-Frappe-CSRF-Token': getCookie('csrf_token') || ''
        },
        body: JSON.stringify({ doc: docData }),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Submission failed');
      }

      const createdDoc = await response.json();
      const parentName = createdDoc.data.name; // The primary key of the new doc

      // 2) Handle A-Level results if there are any
      if (formData.a_level_results.length > 0) {
        for (const row of formData.a_level_results) {
          await fetch('/api/resource/A_Level_Results', {
            method: 'POST',
            headers: {
              ...commonHeaders,
              'Content-Type': 'application/json',
              'X-Frappe-CSRF-Token': getCookie('csrf_token') || ''
            },
            body: JSON.stringify({
              doc: {
                doctype: 'A_Level_Results',
                parent: parentName,                     // parent doc name
                parenttype: 'Meet and Fly 24 - Central And South',  // parent doctype
                parentfield: 'a_level_results',          // child table fieldname in parent
                subject: row.subject,
                results: row.results
              }
            }),
            credentials: 'include'
          });
        }
      }

      alert('Registration submitted successfully!');

      // Reset form after successful submission
      setFormData({
        name1: '',
        mobile_number: '',
        email_id: '',
        nearest_city: '',
        are_you_coming_alone_to_the_event: '',
        do_you_or_have_3_passes_in_a_level: 0,
        a_level_results: [],
        please_upload_your_cv_here_less_then2_5_mb: null,
        can_you_take_ielts: '',
        pourpose: ''
      });

    } catch (error) {
      console.error('Error:', error);
      alert(`Failed to submit: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name *</label>
          <input
            type="text"
            name="name1"
            value={formData.name1}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                       focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          {errors.name1 && <p className="mt-1 text-sm text-red-600">{errors.name1}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile Number *</label>
          <input
            type="tel"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                       focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          {errors.mobile_number && <p className="mt-1 text-sm text-red-600">{errors.mobile_number}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email *</label>
          <input
            type="email"
            name="email_id"
            value={formData.email_id}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                       focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          {errors.email_id && <p className="mt-1 text-sm text-red-600">{errors.email_id}</p>}
        </div>

        {/* Nearest City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nearest City *</label>
          <select
            name="nearest_city"
            value={formData.nearest_city}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                       focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select a city</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.nearest_city && (
            <p className="mt-1 text-sm text-red-600">{errors.nearest_city}</p>
          )}
        </div>

        {/* Accompaniment */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Are you coming alone to the event? *
          </label>
          <select
            name="are_you_coming_alone_to_the_event"
            value={formData.are_you_coming_alone_to_the_event}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                       focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select an option</option>
            {accompanimentOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.are_you_coming_alone_to_the_event && (
            <p className="mt-1 text-sm text-red-600">
              {errors.are_you_coming_alone_to_the_event}
            </p>
          )}
        </div>

        {/* A Level Passes (checkbox) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              name="do_you_or_have_3_passes_in_a_level"
              checked={formData.do_you_or_have_3_passes_in_a_level}
              onChange={handleInputChange}
              className="mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            Do you have 3 Passes in A Level?
          </label>
        </div>

        {/* A Level Results child table */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            A Level Results
          </label>
          {formData.a_level_results.map((result, index) => (
            <div key={index} className="flex gap-4 mb-2">
              <select
                value={result.subject}
                onChange={(e) => handleResultChange(index, 'subject', e.target.value)}
                className="flex-1 rounded-md border-gray-300 shadow-sm 
                           focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Subject</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              <input
                type="text"
                value={result.results}
                onChange={(e) => handleResultChange(index, 'results', e.target.value)}
                placeholder="Result"
                className="flex-1 rounded-md border-gray-300 shadow-sm 
                           focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddResult}
            className="mt-2 inline-flex items-center px-3 py-2 border border-transparent 
                       text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 
                       hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
                       focus:ring-indigo-500"
          >
            Add Result
          </button>
        </div>

        {/* CV Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload CV (max 2.5MB)
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="mt-1 block w-full"
          />
          {errors.please_upload_your_cv_here_less_then2_5_mb && (
            <p className="mt-1 text-sm text-red-600">
              {errors.please_upload_your_cv_here_less_then2_5_mb}
            </p>
          )}
        </div>

        {/* IELTS */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Can you take IELTS? *
          </label>
          <select
            name="can_you_take_ielts"
            value={formData.can_you_take_ielts}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                       focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select an option</option>
            {ieltsOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.can_you_take_ielts && (
            <p className="mt-1 text-sm text-red-600">{errors.can_you_take_ielts}</p>
          )}
        </div>

        {/* Purpose */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Purpose *
          </label>
          <select
            name="pourpose"
            value={formData.pourpose}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                       focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select a purpose</option>
            {purposeOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.pourpose && (
            <p className="mt-1 text-sm text-red-600">{errors.pourpose}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent 
                       rounded-md shadow-sm text-sm font-medium text-white 
                       bg-indigo-600 hover:bg-indigo-700 focus:outline-none 
                       focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                       disabled:bg-gray-400"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>

      </form>
    </div>
  );
};

export default RegistrationForm;
