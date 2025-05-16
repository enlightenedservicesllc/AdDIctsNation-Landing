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
          <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">1. Acceptance of Terms</h2>
          <p className="text-[20px] text-black-600 mb-3">
            By accessing and using AdDictsNation ("the Site"), you accept and
            agree to be bound by the terms and provision of this agreement. If
            you do not agree to abide by these terms, please do not use this
            Site.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            2. Description of Service
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            AdDictsNation is a platform that connects advertisers, creators, and
            ad enthusiasts. Users can browse content, create profiles, post
            comments, rate ads, and participate in discussions about advertising
            and marketing.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            3. User Responsibilities
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            As a user of the Site, you agree to:
          </p>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>
              Provide accurate and current information during registration.
            </li>
            <li>Maintain the confidentiality of your account information.</li>
            <li>
              Use the Site in compliance with all applicable laws and
              regulations.
            </li>
            <li>
              Refrain from engaging in prohibited conduct as outlined in Section
              5.
            </li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">4. Content Ownership</h2>
          <p className="text-[20px] text-black-600 mb-3">
            Users retain ownership of the content they submit to the Site. By
            posting content, you grant AdDictsNation a worldwide, non-exclusive,
            royalty-free license to use, reproduce, modify, and distribute your
            content in connection with the operation of the Site.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">5. Prohibited Conduct</h2>
          <p className="text-[20px] text-black-600 mb-3">
            Users are prohibited from:
          </p>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>
              Posting content that is unlawful, harmful, threatening, abusive,
              defamatory, or otherwise objectionable.
            </li>
            <li>
              Impersonating any person or entity or falsely stating your
              affiliation with a person or entity.
            </li>
            <li>
              Engaging in activities that could harm or disrupt the Site's
              operations or security.
            </li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">6. Account Security</h2>
          <p className="text-[20px] text-black-600 mb-3">
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account. Notify immediately of any unauthorized use of your account.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            7. Intellectual Property
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            All content and materials on the Site, excluding user-generated
            content, are the intellectual property of AdDictsNation and are
            protected by applicable laws. Unauthorized use of such content is
            prohibited.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            8. Termination of Service
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            AdDictsNation reserves the right to suspend or terminate your
            account and access to the Site at its sole discretion, without
            notice, for conduct that AdDictsNation believes violates these Terms
            of Service or is harmful to other users of the Site, AdDictsNation,
            or third parties, or for any other reason.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">9. Dispute Resolution</h2>
          <p className="text-[20px] text-black-600 mb-3">
            Any disputes arising out of or related to these Terms of Service
            and/or any use by you of the Site shall be governed by the laws of
            AdDictsNation, without regard to its conflict of law provisions.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            10. Changes to the Terms of Service
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            AdDictsNation reserves the right to modify these Terms of Service at
            any time. Any changes will be effective immediately upon posting on
            the Site. Your continued use of the Site after any such changes
            constitutes your acceptance of the new Terms of Service.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            11. Contact Information
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            For any questions about these Terms of Service, please contact us at
            support@addictsnation.com
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default TextSection;
