
document.addEventListener('DOMContentLoaded', function () {
    // Form navigation
    const formSteps = document.querySelectorAll('.form-step');
    const stepButtons = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const form = document.getElementById('jobApplicationForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    const backToHome = document.getElementById('backToHome');

    let currentStep = 1;
    const totalSteps = 4;

    // Initialize form
    updateStepProgress();

    // Next button click handler
    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (validateStep(currentStep)) {
                currentStep++;
                updateStepProgress();
            }
        });
    });

    // Previous button click handler
    prevButtons.forEach(button => {
        button.addEventListener('click', function () {
            currentStep--;
            updateStepProgress();
        });
    });

    // Step progress indicator click handler
    stepButtons.forEach(button => {
        button.addEventListener('click', function () {
            const stepToGo = parseInt(this.getAttribute('data-step'));
            if (stepToGo < currentStep) {
                currentStep = stepToGo;
                updateStepProgress();
            }
        });
    });

    // Add education section
    let educationCount = 1;
    document.getElementById('addEducation').addEventListener('click', function () {
        educationCount++;
        const educationSection = document.querySelector('.education-section');
        const newEducation = `
                    <div class="education-entry mb-6 border-t pt-4">
                        <div class="flex justify-between items-center mb-2">
                            <h4 class="font-medium">Education #${educationCount}</h4>
                            <button type="button" class="remove-education text-red-500 hover:text-red-700 text-sm">
                                <i class="fas fa-times"></i> Remove
                            </button>
                        </div>
                        <div class="mb-4">
                            <label for="institution-${educationCount}" class="block text-sm font-medium text-gray-700 mb-1">Institution*</label>
                            <input type="text" id="institution-${educationCount}" name="education[${educationCount - 1}][institution]" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                            <p class="text-red-500 text-xs mt-1 error-message hidden">Please enter institution name</p>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label for="degree-${educationCount}" class="block text-sm font-medium text-gray-700 mb-1">Degree*</label>
                                <input type="text" id="degree-${educationCount}" name="education[${educationCount - 1}][degree]" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                                <p class="text-red-500 text-xs mt-1 error-message hidden">Please enter your degree</p>
                            </div>
                            <div>
                                <label for="fieldOfStudy-${educationCount}" class="block text-sm font-medium text-gray-700 mb-1">Field of Study*</label>
                                <input type="text" id="fieldOfStudy-${educationCount}" name="education[${educationCount - 1}][fieldOfStudy]" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                                <p class="text-red-500 text-xs mt-1 error-message hidden">Please enter field of study</p>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label for="startDate-${educationCount}" class="block text-sm font-medium text-gray-700 mb-1">Start Date*</label>
                                <input type="date" id="startDate-${educationCount}" name="education[${educationCount - 1}][startDate]" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                                <p class="text-red-500 text-xs mt-1 error-message hidden">Please select start date</p>
                            </div>
                            <div>
                                <label for="endDate-${educationCount}" class="block text-sm font-medium text-gray-700 mb-1">End Date (or expected)*</label>
                                <input type="date" id="endDate-${educationCount}" name="education[${educationCount - 1}][endDate]" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                                <p class="text-red-500 text-xs mt-1 error-message hidden">Please select end date</p>
                            </div>
                        </div>
                    </div>
                `;
        educationSection.insertAdjacentHTML('afterend', newEducation);

        // Add event listener to the new remove button
        document.querySelector('.education-section').nextElementSibling.querySelector('.remove-education')
            .addEventListener('click', function () {
                this.closest('.education-entry').remove();
                educationCount--;
                // Renumber remaining education entries
                const educationEntries = document.querySelectorAll('.education-entry');
                educationEntries.forEach((entry, index) => {
                    entry.querySelector('h4').textContent = `Education #${index + 1}`;
                });
            });
    });

    // Add experience section
    let experienceCount = 1;
    document.getElementById('addExperience').addEventListener('click', function () {
        experienceCount++;
        const experienceSection = document.querySelector('.experience-section');
        const newExperience = `
                    <div class="experience-entry mb-6 border-t pt-4">
                        <div class="flex justify-between items-center mb-2">
                            <h4 class="font-medium">Experience #${experienceCount}</h4>
                            <button type="button" class="remove-experience text-red-500 hover:text-red-700 text-sm">
                                <i class="fas fa-times"></i> Remove
                            </button>
                        </div>
                        <div class="mb-4">
                            <label for="company-${experienceCount}" class="block text-sm font-medium text-gray-700 mb-1">Company*</label>
                            <input type="text" id="company-${experienceCount}" name="experience[${experienceCount - 1}][company]" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                            <p class="text-red-500 text-xs mt-1 error-message hidden">Please enter company name</p>
                        </div>
                        
                        <div class="mb-4">
                            <label for="position-${experienceCount}" class="block text-sm font-medium text-gray-700 mb-1">Position*</label>
                            <input type="text" id="position-${experienceCount}" name="experience[${experienceCount - 1}][position]" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                            <p class="text-red-500 text-xs mt-1 error-message hidden">Please enter your position</p>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label for="jobStartDate-${experienceCount}" class="block text-sm font-medium text-gray-700 mb-1">Start Date*</label>
                                <input type="date" id="jobStartDate-${experienceCount}" name="experience[${experienceCount - 1}][startDate]" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                                <p class="text-red-500 text-xs mt-1 error-message hidden">Please select start date</p>
                            </div>
                            <div>
                                <label for="jobEndDate-${experienceCount}" class="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                                <input type="date" id="jobEndDate-${experienceCount}" name="experience[${experienceCount - 1}][endDate]"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                                <div class="flex items-center mt-1">
                                    <input type="checkbox" id="currentlyWorking-${experienceCount}" name="experience[${experienceCount - 1}][currentlyWorking]" class="mr-2">
                                    <label for="currentlyWorking-${experienceCount}" class="text-sm text-gray-600">I currently work here</label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <label for="jobDescription-${experienceCount}" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea id="jobDescription-${experienceCount}" name="experience[${experienceCount - 1}][description]" rows="3"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"></textarea>
                        </div>
                    </div>
                `;
        experienceSection.insertAdjacentHTML('afterend', newExperience);

        // Add event listener to the new remove button
        document.querySelector('.experience-section').nextElementSibling.querySelector('.remove-experience')
            .addEventListener('click', function () {
                this.closest('.experience-entry').remove();
                experienceCount--;
                // Renumber remaining experience entries
                const experienceEntries = document.querySelectorAll('.experience-entry');
                experienceEntries.forEach((entry, index) => {
                    entry.querySelector('h4').textContent = `Experience #${index + 1}`;
                });
            });
    });

    // Currently working checkbox handler
    document.addEventListener('change', function (e) {
        if (e.target && e.target.matches('input[name^="experience"][name$="currentlyWorking]"]')) {
            const endDateInput = e.target.closest('.grid').querySelector('input[type="date"]');
            endDateInput.disabled = e.target.checked;
            if (e.target.checked) {
                endDateInput.value = '';
            }
        }
    });

    // Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (validateStep(currentStep)) {
            // In a real application, you would send the data to a server here
            // For this example, we'll just show the success modal

            // Prepare review data
            prepareReviewData();

            // Show success modal
            successModal.classList.remove('hidden');
        }
    });

    // Close modal
    closeModal.addEventListener('click', function () {
        successModal.classList.add('hidden');
    });

    // Back to Home button
    backToHome.addEventListener('click', function () {
        // In a real application, this would redirect to your home page
        // For this example, we'll just reload the form
        window.location.reload();
        // Alternatively, you could use:
        // window.location.href = "/"; // to go to your home page
    });

    // Update step progress
    function updateStepProgress() {
        // Update form steps visibility
        formSteps.forEach(step => {
            if (parseInt(step.getAttribute('data-step')) === currentStep) {
                step.classList.remove('hidden');
                step.classList.add('active');
            } else {
                step.classList.add('hidden');
                step.classList.remove('active');
            }
        });

        // Update progress indicators
        stepButtons.forEach(button => {
            const stepNumber = parseInt(button.getAttribute('data-step'));
            const stepCircle = button.querySelector('div');
            const stepLabel = button.querySelector('span');

            if (stepNumber === currentStep) {
                stepCircle.classList.remove('bg-gray-200', 'text-gray-600');
                stepCircle.classList.add('bg-gradient-to-br', 'from-primary', 'to-primary-dark', 'text-white');
                stepLabel.classList.remove('text-gray-500');
                stepLabel.classList.add('text-primary', 'font-medium');
            } else if (stepNumber < currentStep) {
                stepCircle.classList.remove('bg-gray-200', 'text-gray-600');
                stepCircle.classList.add('bg-gradient-to-br', 'from-secondary', 'to-secondary-dark', 'text-white');
                stepLabel.classList.remove('text-gray-500');
                stepLabel.classList.add('text-secondary-dark', 'font-medium');
            } else {
                stepCircle.classList.remove('bg-gradient-to-br', 'from-primary', 'to-primary-dark', 'text-white', 'bg-gradient-to-br', 'from-secondary', 'to-secondary-dark');
                stepCircle.classList.add('bg-gray-200', 'text-gray-600');
                stepLabel.classList.remove('text-primary', 'text-secondary-dark', 'font-medium');
                stepLabel.classList.add('text-gray-500');
            }
        });
    }

    // Validate current step
    function validateStep(step) {
        let isValid = true;

        // Hide all error messages first
        document.querySelectorAll('.error-message').forEach(el => {
            el.classList.add('hidden');
        });

        if (step === 1) {
            // Validate personal information
            const firstName = document.getElementById('firstName');
            const lastName = document.getElementById('lastName');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');

            if (!firstName.value.trim()) {
                showError(firstName, 'Please enter your first name');
                isValid = false;
            }

            if (!lastName.value.trim()) {
                showError(lastName, 'Please enter your last name');
                isValid = false;
            }

            if (!email.value.trim() || !isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            }

            if (!phone.value.trim() || !isValidPhone(phone.value)) {
                showError(phone, 'Please enter a valid phone number');
                isValid = false;
            }
        } else if (step === 2) {
            // Validate education
            const educationEntries = document.querySelectorAll('.education-entry');

            educationEntries.forEach((entry, index) => {
                const institution = entry.querySelector('input[name^="education"][name$="institution]"]');
                const degree = entry.querySelector('input[name^="education"][name$="degree]"]');
                const fieldOfStudy = entry.querySelector('input[name^="education"][name$="fieldOfStudy]"]');
                const startDate = entry.querySelector('input[name^="education"][name$="startDate]"]');
                const endDate = entry.querySelector('input[name^="education"][name$="endDate]"]');

                if (!institution.value.trim()) {
                    showError(institution, 'Please enter institution name');
                    isValid = false;
                }

                if (!degree.value.trim()) {
                    showError(degree, 'Please enter your degree');
                    isValid = false;
                }

                if (!fieldOfStudy.value.trim()) {
                    showError(fieldOfStudy, 'Please enter field of study');
                    isValid = false;
                }

                if (!startDate.value) {
                    showError(startDate, 'Please select start date');
                    isValid = false;
                }

                if (!endDate.value) {
                    showError(endDate, 'Please select end date');
                    isValid = false;
                }
            });
        } else if (step === 3) {
            // Validate work experience
            const experienceEntries = document.querySelectorAll('.experience-entry');

            experienceEntries.forEach((entry, index) => {
                const company = entry.querySelector('input[name^="experience"][name$="company]"]');
                const position = entry.querySelector('input[name^="experience"][name$="position]"]');
                const startDate = entry.querySelector('input[name^="experience"][name$="startDate]"]');

                if (!company.value.trim()) {
                    showError(company, 'Please enter company name');
                    isValid = false;
                }

                if (!position.value.trim()) {
                    showError(position, 'Please enter your position');
                    isValid = false;
                }

                if (!startDate.value) {
                    showError(startDate, 'Please select start date');
                    isValid = false;
                }
            });
        } else if (step === 4) {
            // Validate terms agreement
            const agreeTerms = document.getElementById('agreeTerms');

            if (!agreeTerms.checked) {
                showError(agreeTerms, 'You must agree to the terms');
                isValid = false;
            }
        }

        return isValid;
    }

    // Show error message
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = message;
            errorElement.classList.remove('hidden');
        }
    }

    // Email validation
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Phone validation (simple version)
    function isValidPhone(phone) {
        const re = /^[\d\s\-+()]{8,}$/;
        return re.test(phone);
    }

    // Prepare review data
    function prepareReviewData() {
        // Personal information
        const personalData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value
        };

        let personalHTML = '';
        for (const [key, value] of Object.entries(personalData)) {
            if (value) {
                const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                personalHTML += `<p><span class="font-medium">${label}:</span> ${value}</p>`;
            }
        }
        document.getElementById('reviewPersonal').innerHTML = personalHTML;

        // Education
        const educationEntries = document.querySelectorAll('.education-entry');
        let educationHTML = '';

        educationEntries.forEach((entry, index) => {
            const institution = entry.querySelector('input[name^="education"][name$="institution]"]').value;
            const degree = entry.querySelector('input[name^="education"][name$="degree]"]').value;
            const fieldOfStudy = entry.querySelector('input[name^="education"][name$="fieldOfStudy]"]').value;
            const startDate = entry.querySelector('input[name^="education"][name$="startDate]"]').value;
            const endDate = entry.querySelector('input[name^="education"][name$="endDate]"]').value;

            educationHTML += `
                        <div class="mb-4 pb-4 ${index < educationEntries.length - 1 ? 'border-b' : ''}">
                            <h4 class="font-medium">${institution}</h4>
                            <p>${degree} in ${fieldOfStudy}</p>
                            <p class="text-sm text-gray-600">${formatDate(startDate)} - ${formatDate(endDate)}</p>
                        </div>
                    `;
        });

        document.getElementById('reviewEducation').innerHTML = educationHTML;

        // Experience
        const experienceEntries = document.querySelectorAll('.experience-entry');
        let experienceHTML = '';

        experienceEntries.forEach((entry, index) => {
            const company = entry.querySelector('input[name^="experience"][name$="company]"]').value;
            const position = entry.querySelector('input[name^="experience"][name$="position]"]').value;
            const startDate = entry.querySelector('input[name^="experience"][name$="startDate]"]').value;
            const endDate = entry.querySelector('input[name^="experience"][name$="endDate]"]').value;
            const currentlyWorking = entry.querySelector('input[name^="experience"][name$="currentlyWorking]"]').checked;
            const description = entry.querySelector('textarea[name^="experience"][name$="description]"]').value;

            const dateRange = currentlyWorking ?
                `${formatDate(startDate)} - Present` :
                `${formatDate(startDate)} - ${formatDate(endDate)}`;

            experienceHTML += `
                        <div class="mb-4 pb-4 ${index < experienceEntries.length - 1 ? 'border-b' : ''}">
                            <h4 class="font-medium">${position} at ${company}</h4>
                            <p class="text-sm text-gray-600">${dateRange}</p>
                            ${description ? `<p class="mt-2 text-gray-700">${description}</p>` : ''}
                        </div>
                    `;
        });

        document.getElementById('reviewExperience').innerHTML = experienceHTML;
    }

    // Format date for display
    function formatDate(dateString) {
        if (!dateString) return '';

        const options = { year: 'numeric', month: 'short' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }
});
