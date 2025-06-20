<?php
/**
 * The main template file for DermAI Theme
 * This file displays the main application interface.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 * @package DermAI_Basic_Theme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); // This will output lang and dir attributes ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php // Meta description and author can be managed by SEO plugins or added specifically if needed. ?>

    <!-- Google Fonts: These are better enqueued via functions.php for performance and management. -->
    <!-- If you've enqueued them in functions.php, you can remove these direct links. -->
    <!-- For now, leaving them here ensures they load if not enqueued. -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap" rel="stylesheet">

    <!-- Firebase SDKs - Loaded early -->
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

    <?php wp_head(); // CRITICAL: WordPress hook for plugins, enqueued styles (like style.css), and scripts. ?>
</head>
<body <?php body_class(); // Adds useful CSS classes to the body tag ?>>
    <?php wp_body_open(); // WordPress 5.2+ hook for plugins. ?>

    <header>
        <div class="logo">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/image.png" alt="<?php esc_attr_e( 'Derm AI Logo', 'dermai-theme' ); ?>">
        </div>
        <h1 class="title" data-i18n="Derm AI"><?php esc_html_e( 'Derm AI', 'dermai-theme' ); ?></h1>
        <div class="search-bar-container">
            <input type="text" id="search-bar" data-i18n="Search for a disease..." placeholder="<?php esc_attr_e( 'Search for a disease...', 'dermai-theme' ); ?>">
            <ul id="suggestions" class="suggestions-list"></ul>
        </div>

        <nav>
            <a href="#about" data-i18n="About"><?php esc_html_e( 'About', 'dermai-theme' ); ?></a>
            <a href="#faq-section" data-i18n="FAQ"><?php esc_html_e( 'FAQ', 'dermai-theme' ); ?></a>
            <a href="#contact" data-i18n="Contact"><?php esc_html_e( 'Contact', 'dermai-theme' ); ?></a>
            <a href="https://buymeacoffee.com/dermai" target="_blank" rel="noopener noreferrer" data-i18n="Donate"><?php esc_html_e( 'Donate', 'dermai-theme' ); ?></a>
            <a href="#" id="signInLink" data-i18n="Sign In"><?php esc_html_e( 'Sign In', 'dermai-theme' ); ?></a>
            <img id="profilePic" src="" alt="<?php esc_attr_e( 'Profile Picture', 'dermai-theme' ); ?>" style="display: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer;">
            <a href="#" id="logoutLink" style="display: none;" data-i18n="Logout"><?php esc_html_e( 'Logout', 'dermai-theme' ); ?></a>
        </nav>

        <div class="language-button-container">
            <select id="language-select">
              <option value="en">English</option>
              <option value="ar">عربي</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
        </div>
    </header>
    <div class="scrolling-circles"></div>

    <div id="locationButton" class="location-icon">🗺️</div>

    <div id="locationModal" class="modal" style="display: none;">
        <div class="modal-content" style="position: relative; background: white; padding: 20px; width: 80%; max-width: 700px; margin: auto;">
            <h2 data-i18n="Nearest Dermatologist" style="text-align: center;"><?php esc_html_e( 'Nearest Dermatologist', 'dermai-theme' ); ?></h2>
            <div id="map" style="width: 100%; height: 400px; margin-bottom: 15px; background: #eee; display:flex; align-items:center; justify-content:center;"><?php esc_html_e( 'Map loading...', 'dermai-theme' ); ?></div>
            <button id="closeLocationModal" data-i18n="Close" style="display: block; margin: 0 auto;"><?php esc_html_e( 'Close', 'dermai-theme' ); ?></button>
        </div>
    </div>

    <div id="signInModal" class="modal" style="display: none; align-items: center; justify-content: center;">
         <div class="modal-content" style="position: relative; background: white; padding: 20px; border-radius: 10px; width: 90%; max-width: 450px;">
            <h2 id="modalTitle" data-i18n="Register" style="text-align: center;"><?php esc_html_e( 'Register', 'dermai-theme' ); ?></h2>
            <div id="register-section">
                <form id="registerForm">
                    <label for="registerEmail" data-i18n="Email"><?php esc_html_e( 'Email', 'dermai-theme' ); ?></label>
                    <input type="email" id="registerEmail" required>
                    <label for="registerPassword" data-i18n="Password"><?php esc_html_e( 'Password', 'dermai-theme' ); ?></label>
                    <input type="password" id="registerPassword" required>
                    <button type="submit" data-i18n="Register"><?php esc_html_e( 'Register', 'dermai-theme' ); ?></button>
                </form>
                <p id="login-prompt" style="text-align: center; margin-top: 15px;">
                    <a href="#" id="loginLink" data-i18n="Already have an account? Log in"><?php esc_html_e( 'Already have an account? Log in', 'dermai-theme' ); ?></a>
                </p>
            </div>
            <div id="login-section" style="display: none;">
                <h3 data-i18n="Login" style="text-align: center;"><?php esc_html_e( 'Login', 'dermai-theme' ); ?></h3>
                <form id="loginForm">
                    <label for="loginEmail" data-i18n="Email"><?php esc_html_e( 'Email', 'dermai-theme' ); ?></label>
                    <input type="email" id="loginEmail" required>
                    <label for="loginPassword" data-i18n="Password"><?php esc_html_e( 'Password', 'dermai-theme' ); ?></label>
                    <input type="password" id="loginPassword" required>
                    <button type="submit" data-i18n="Login"><?php esc_html_e( 'Login', 'dermai-theme' ); ?></button>
                </form>
                 <p id="register-prompt" style="text-align: center; margin-top: 15px;">
                    <a href="#" id="registerLink" data-i18n="Need an account? Register"><?php esc_html_e( 'Need an account? Register', 'dermai-theme' ); ?></a>
                </p>
            </div>
            <hr style="margin: 20px 0;">
            <button id="googleSignInBtn" data-i18n="Sign in with Google" style="display: block; width: calc(100% - 20px); margin: 10px auto;"><?php esc_html_e( 'Sign in with Google', 'dermai-theme' ); ?></button>
            <button id="closeSignInModal" data-i18n="Close" style="display: block; width: calc(100% - 20px); margin: 10px auto 0;"><?php esc_html_e( 'Close', 'dermai-theme' ); ?></button>
            <p id="user-status" style="text-align: center; margin-top:15px; font-size: 0.9em;" data-i18n="Not logged in"><?php esc_html_e( 'Not logged in', 'dermai-theme' ); ?></p>
        </div>
    </div>

    <main>
        <section class="upload-section">
            <h2 data-i18n="Upload Your Skin Photo"><?php esc_html_e( 'Upload Your Skin Photo', 'dermai-theme' ); ?></h2>
            <p data-i18n="Please upload a clear image of the affected skin area. Ensure the photo is well-lit and focused for better analysis."><?php esc_html_e( 'Please upload a clear image of the affected skin area. Ensure the photo is well-lit and focused for better analysis.', 'dermai-theme' ); ?></p>
            <form id="userInfoForm" onsubmit="return false;">
                <label for="age" data-i18n="Your Age"><?php esc_html_e( 'Your Age', 'dermai-theme' ); ?></label>
                <input type="number" id="age" required>
                <label for="gender" data-i18n="Your Gender"><?php esc_html_e( 'Your Gender', 'dermai-theme' ); ?></label>
                <select id="gender" required>
                    <option value="male" data-i18n="Male"><?php esc_html_e( 'Male', 'dermai-theme' ); ?></option>
                    <option value="female" data-i18n="Female"><?php esc_html_e( 'Female', 'dermai-theme' ); ?></option>
                </select>
                <label for="skinType" data-i18n="Your Skin Type"><?php esc_html_e( 'Your Skin Type', 'dermai-theme' ); ?></label>
                <select id="skinType" required>
                    <option value="dry" data-i18n="Dry"><?php esc_html_e( 'Dry', 'dermai-theme' ); ?></option>
                    <option value="oily" data-i18n="Oily"><?php esc_html_e( 'Oily', 'dermai-theme' ); ?></option>
                    <option value="combination" data-i18n="Combination"><?php esc_html_e( 'Combination', 'dermai-theme' ); ?></option>
                </select>
            </form>
            <label for="skin-photo" class="upload-button" data-i18n="Choose Photo"><?php esc_html_e( 'Choose Photo', 'dermai-theme' ); ?></label>
            <input id="skin-photo" class="upload-input" type="file" accept="image/*">
            <div class="upload-preview" id="upload-preview"></div>
            <span id="diagnosis-result" data-i18n="Diagnosis: "></span>
        </section>

        <section id="about" class="section">
            <h1 data-i18n="About Derm AI"><?php esc_html_e( 'About Derm AI', 'dermai-theme' ); ?></h1>
            <p>
                <span data-i18n="about1"><?php esc_html_e( 'Skin diseases are among the most prevalent health concerns worldwide, affecting millions of people across all age groups.', 'dermai-theme' ); ?></span>
                <span data-i18n="about2"><?php esc_html_e( 'At Derm AI, we are committed to leveraging the power of technology to address these challenges.', 'dermai-theme' ); ?></span>
                <span data-i18n="about3"><?php esc_html_e( 'By integrating deep learning and advanced AI algorithms, we aim to revolutionize how skin conditions are detected and managed.', 'dermai-theme' ); ?></span>
                <span data-i18n="about4"><?php esc_html_e( 'Our AI models analyze high-quality photos of skin to identify a wide range of conditions, from common issues like acne and eczema to more complex skin concerns.', 'dermai-theme' ); ?></span>
                <span data-i18n="about5"><?php esc_html_e( 'With the ability to provide rapid, accurate, and accessible diagnostics, our platform serves as a valuable tool for individuals seeking insights into their skin health.', 'dermai-theme' ); ?></span>
                <span data-i18n="about6"><?php esc_html_e( 'This approach is particularly beneficial for those in underserved or remote areas, where access to dermatological care is limited.', 'dermai-theme' ); ?></span>
            </p>
        </section>

        <section id="faq-section" class="faq">
            <h1 data-i18n="Frequently Asked Questions"><?php esc_html_e( 'Frequently Asked Questions', 'dermai-theme' ); ?></h1>
            <div class="faq-item">
                <h3 data-i18n="How does Derm AI work?"><?php esc_html_e( 'How does Derm AI work?', 'dermai-theme' ); ?></h3>
                <p data-i18n="Derm AI is an innovative platform designed to diagnose skin diseases quickly and accurately. Users simply upload a clear photo of the affected area, and our advanced algorithms analyze the image against a vast database of skin conditions. This process allows us to provide a preliminary diagnosis in a matter of seconds. Our technology is built on a lot of research and expertise in dermatology, ensuring that you receive reliable insights. With Derm AI, your journey to healthier skin starts with just a click."><?php esc_html_e( 'Derm AI is an innovative platform designed to diagnose skin diseases quickly and accurately. Users simply upload a clear photo of the affected area, and our advanced algorithms analyze the image against a vast database of skin conditions. This process allows us to provide a preliminary diagnosis in a matter of seconds. Our technology is built on a lot of research and expertise in dermatology, ensuring that you receive reliable insights. With Derm AI, your journey to healthier skin starts with just a click.', 'dermai-theme' ); ?></p>
            </div>
            <div class="faq-item">
                <h3 data-i18n="Is my data safe with Derm AI?"><?php esc_html_e( 'Is my data safe with Derm AI?', 'dermai-theme' ); ?></h3>
                <p data-i18n="At Derm AI, your privacy and security are our top priorities. We employ state-of-the-art encryption and data protection measures to safeguard your personal information and uploaded images. Your data is stored securely and is only used for diagnostic purposes. We adhere to strict privacy regulations and do not share your information with third parties without your consent. Rest assured, when you use Derm AI, your sensitive information remains confidential while you receive the best possible skin care advice."><?php esc_html_e( 'At Derm AI, your privacy and security are our top priorities. We employ state-of-the-art encryption and data protection measures to safeguard your personal information and uploaded images. Your data is stored securely and is only used for diagnostic purposes. We adhere to strict privacy regulations and do not share your information with third parties without your consent. Rest assured, when you use Derm AI, your sensitive information remains confidential while you receive the best possible skin care advice.', 'dermai-theme' ); ?></p>
            </div>
            <div class="faq-item">
                <h3 data-i18n="Can Derm AI replace a dermatologist?"><?php esc_html_e( 'Can Derm AI replace a dermatologist?', 'dermai-theme' ); ?></h3>
                <p data-i18n="While Derm AI offers a convenient and quick way to assess skin conditions, it is not a substitute for professional medical advice. Our platform provides preliminary insights based on image analysis, which can be a useful starting point for understanding your skin health. However, for a comprehensive diagnosis and treatment plan, we always recommend consulting a licensed dermatologist. Derm AI empowers you with information, but your health deserves the expertise of a qualified professional."><?php esc_html_e( 'While Derm AI offers a convenient and quick way to assess skin conditions, it is not a substitute for professional medical advice. Our platform provides preliminary insights based on image analysis, which can be a useful starting point for understanding your skin health. However, for a comprehensive diagnosis and treatment plan, we always recommend consulting a licensed dermatologist. Derm AI empowers you with information, but your health deserves the expertise of a qualified professional.', 'dermai-theme' ); ?></p>
            </div>
        </section>

    
        <section id="contact" class="section">
            <h1 data-i18n="Contact Us"><?php esc_html_e( 'Contact Us', 'dermai-theme' ); ?></h1>
            <form id="feedbackForm">
                <label for="name" data-i18n="Your Name"><?php esc_html_e( 'Your Name', 'dermai-theme' ); ?></label>
                <input type="text" id="name" name="name" placeholder="<?php esc_attr_e( 'Your Name', 'dermai-theme' ); ?>" data-i18n="Your Name" required>

                <label for="email" data-i18n="Your Email"><?php esc_html_e( 'Your Email', 'dermai-theme' ); ?></label>
                <input type="email" id="email" name="email" placeholder="<?php esc_attr_e( 'Your Email', 'dermai-theme' ); ?>" data-i18n="Your Email" required>

                <label for="message" data-i18n="Your Feedback"><?php esc_html_e( 'Your Feedback', 'dermai-theme' ); ?></label>
                <textarea id="message" name="message" rows="4" placeholder="<?php esc_attr_e( 'Your Feedback', 'dermai-theme' ); ?>" data-i18n="Your Feedback" required></textarea>

                <button type="submit" data-i18n="Submit"><?php esc_html_e( 'Submit', 'dermai-theme' ); ?></button>
            </form>
        </section>
    
    </main>

    <footer>
        <p data-i18n="© 2024 Derm AI | All rights reserved"><?php esc_html_e( '© 2024 Derm AI | All rights reserved', 'dermai-theme' ); ?></p>
        <p>Mariam Mohamed || maryam.1123593@stemmaadi.moe.edu.eg</p>
        <p>Nirvana Simon || nirvana.1123609@stemmaadi.moe.edu.eg</p>
    </footer>

    <!-- Google Maps API Script (ensure YOUR_API_KEY is replaced) -->
    <!-- IMPORTANT: Replace YOUR_API_KEY with your actual Google Maps API Key -->
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap&libraries=places&solution_channel=GMP_QB_Websites_1" async defer></script>

    <?php wp_footer(); // CRITICAL: WordPress hook for enqueued scripts (like script.js) and other footer items. ?>
</body>
</html>