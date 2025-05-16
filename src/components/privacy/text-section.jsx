import React from "react";
import { motion } from "framer-motion";

const TextSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto py-8 px-4">
        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">1. Introduction</h2>
          <p className="text-[20px] text-black-600 mb-3">
            Welcome to AdDictsNation.com ("we," "our," "us"). Your privacy is
            important to us, and we are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit
            AdDictsNation.com (the "Site").
          </p>
          <p className="text-[20px] text-black-600 mb-3">
            By using the Site, you consent to the practices described in this
            policy. If you do not agree, please do not use our platform.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            2. Information We Collect
          </h2>
          <p className="text-[20px] text-black-600 mb-6">
            We may collect the following types of information from users:
          </p>
          <p className="text-[20px] text-black-600 mb-3">
            A. Information You Provide Directly
          </p>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>
              Account Registration: Name, email address, phone number, username,
              and password.
            </li>
            <li>
              Profile Information: Bio, interests, location, and other optional
              details.
            </li>
            <li>
              User-Generated Content: Posts, comments, ratings, feedback, and
              uploaded media.
            </li>
            <li>
              Communications: Messages, support requests, and survey responses
            </li>
          </ul>
          <p className="text-[20px] text-black-600 mb-3">
            B. Information Collected Automatically
          </p>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>
              Device & Log Data: IP address, browser type, operating system, and
              device identifiers.
            </li>
            <li>
              Usage Data: Pages visited, ads viewed, interactions, and time
              spent on the Site.
            </li>
            <li>
              Cookies & Tracking Technologies: We use cookies and similar
              technologies to improve user experience, analyze trends, and
              personalize content.
            </li>
          </ul>
          <p className="text-[20px] text-black-600 mb-3">
            C. Information from Third Parties
          </p>
          <p className="text-[20px] text-black-600 mb-3">
            We may receive data from social media platforms (if you connect your
            accounts), advertising partners, and analytics providers.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            3. How We Use Your Information
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>
              To provide and personalize your experience on AdDictsNation.com
            </li>
            <li>To enable user interaction, ad rating, and engagement</li>
            <li>To analyze trends and improve our services</li>
            <li>
              To communicate with you regarding updates, promotions, and support
            </li>
            <li>To ensure the security and integrity of our platform</li>
            <li>
              To comply with legal obligations and enforce our Terms of Service
            </li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            4. How We Share Your Information
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            We do not sell your personal data. However, we may share information
            in the following cases:
          </p>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>
              With Other Users: Profile information and public content may be
              visible to other users.
            </li>
            <li>
              With Service Providers: Third-party vendors who assist with
              hosting, analytics, payment processing, and customer support.
            </li>
            <li>
              With Advertisers: Aggregated, anonymized data may be shared for
              targeted advertising.
            </li>
            <li>
              For Legal Reasons: If required by law, legal processes, or to
              prevent fraud, security threats, or illegal activity.
            </li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            5. Your Privacy Choices & Rights
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            You have the right to:
          </p>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2">
            <li>
              Access & Update Your Data: Edit your profile and account settings
              at any time.
            </li>
            <li>
              Delete Your Account: You can request account deletion via
              privacy@addictsnation.com.
            </li>
            <li>
              Manage Cookies & Tracking: Adjust browser settings to disable
              cookies if desired.
            </li>
            <li>
              Opt-Out of Marketing Communications: Use the unsubscribe link in
              emails or contact us.
            </li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">6. Data Security</h2>
          <p className="text-[20px] text-black-600 mb-3">
            We implement strong security measures to protect your data,
            including encryption, firewalls, and secure servers. However, no
            system is 100% secure. Please protect your password and notify us of
            any unauthorized activity.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">7. Data Retention</h2>
          <p className="text-[20px] text-black-600 mb-3">
            We retain your information for as long as your account is active or
            as needed to comply with legal obligations. Deleted accounts may
            have some data retained for legal, security, or backup purposes.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            8. Third-Party Links & Services
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            Our Site may contain links to third-party websites and services. We
            are not responsible for their privacy practices. Please review their
            policies before sharing your data.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">9. Children's Privacy</h2>
          <p className="text-[20px] text-black-600 mb-3">
            AdDictsNation.com is not intended for users under the age of 13 (or
            the applicable age in your country). We do not knowingly collect
            data from children. If we discover such data, we will delete it
            immediately.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            10. Changes to This Privacy Policy
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            We may update this policy from time to time. The latest version will
            always be available at addictsnation.com/privacy. Continued use of
            our platform constitutes acceptance of changes.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            11. Contact Information
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <address className="text-[20px] text-black-600 not-italic">
            <p>By email: privacy@addictsnation.com</p>
            <p>By phone: +1 (302) 567 4191</p>
            <p>Address: 8 The Green STE A, Dover, DE 19901 USA</p>
          </address>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default TextSection;
