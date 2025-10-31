        document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            const showSignup = document.getElementById('show-signup');
            const showLogin = document.getElementById('show-login');
            const loginFormElement = document.getElementById('loginForm');
            const signupFormElement = document.getElementById('signupForm');
            const verification = document.querySelector('.verification');
            
            // Toggle between login and signup forms
            showSignup.addEventListener('click', function(e) {
                e.preventDefault();
                loginForm.classList.add('hidden');
                signupForm.classList.remove('hidden');
            });
            
            showLogin.addEventListener('click', function(e) {
                e.preventDefault();
                signupForm.classList.add('hidden');
                loginForm.classList.remove('hidden');
            });
            
            // Form validation and submission
            loginFormElement.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                
                if (email && password) {
                    alert('Login successful!');
                    // In a real application, you would send this data to a server
                } else {
                    alert('Please fill in all fields');
                }
            });
            
            signupFormElement.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('signup-email').value;
                const password = document.getElementById('signup-password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                
                if (email && password && confirmPassword) {
                    if (password === confirmPassword) {
                        alert('Account created successfully!');
                        // In a real application, you would send this data to a server
                    } else {
                        alert('Passwords do not match');
                    }
                } else {
                    alert('Please fill in all fields');
                }
            });
            
            // Verification click handler
            verification.addEventListener('click', function() {
                const icon = this.querySelector('i');
                const text = this.querySelector('span');
                
                if (icon.classList.contains('fa-check-circle')) {
                    icon.classList.remove('fa-check-circle');
                    icon.classList.add('fa-times-circle');
                    icon.style.color = '#ff4757';
                    text.textContent = 'Verification failed';
                } else {
                    icon.classList.remove('fa-times-circle');
                    icon.classList.add('fa-check-circle');
                    icon.style.color = '#2ed573';
                    text.textContent = 'Verified successfully';
                }
            });
        });
