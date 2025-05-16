import React from "react";
import { motion } from "framer-motion";

const TextSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto py-8 px-4">
        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
          <p className="text-[20px] text-black-600 mb-6">
            Welcome to AdDictsNation, where creativity, critique, and
            collaboration thrive! To maintain a vibrant and respectful
            community, we have established the following guidelines. By
            participating, you agree to uphold these standards to ensure an
            engaging and safe space for all members.
          </p>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            1. Respect & Inclusivity
          </h2>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>
              We celebrate diverse perspectives and encourage open discussions,
              but respect is non-negotiable.
            </li>
            <li>
              No hate speech, discrimination, or harassment based on race,
              gender, religion, disability, or identity.
            </li>
            <li>No personal attacks—critique ideas, not people.</li>
            <li>
              Zero tolerance for bullying—keep discussions professional and
              constructive.
            </li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            2. Quality & Constructive Engagement
          </h2>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>
              This is a space for meaningful conversations about advertising,
              marketing, and creativity.
            </li>
            <li>
              Contribute thoughtfully—spam, trolling, or off-topic posts will be
              removed.
            </li>
            <li>
              Provide constructive criticism—give feedback that helps creators
              improve.
            </li>
            <li>
              Avoid excessive self-promotion—contribute value before promoting
              your work.
            </li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            3. No Plagiarism or Intellectual Property Violations
          </h2>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>Originality matters in advertising—always credit creators.</li>
            <li>Do not post copyrighted content without permission.</li>
            <li>If sharing third-party content, ensure proper attribution.</li>
            <li>User-generated ads should be original or properly licensed.</li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            4. Safe & Professional Conduct
          </h2>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>AdDictsNation is a professional and creative community.</li>
            <li>No explicit, violent, or offensive content.</li>
            <li>No misleading or deceptive advertising.</li>
            <li>
              Respect privacy—do not share personal or sensitive information.
            </li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            5. Reporting & Moderation
          </h2>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>
              We rely on community members to help maintain a positive
              environment.
            </li>
            <li>Use the flagging feature to report violations.</li>
            <li>
              Repeated rule violations may result in warnings, temporary bans,
              or permanent suspension.
            </li>
            <li>
              Community Managers have the final say on enforcement actions.
            </li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            6. Experimental & User-Generated Ads
          </h2>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>
              Respect experimental content—this is a space for learning and
              growth.
            </li>
            <li>Provide thoughtful feedback to support emerging creators.</li>
            <li>
              Avoid stealing ideas—honor originality and fair collaboration.
            </li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            7. Community Ranking & Participation
          </h2>
          <ul className="list-disc pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>
              Members can opt into ranking systems, but engagement should be
              authentic.
            </li>
            <li>
              Engagement metrics are based on contributions, not just
              popularity.
            </li>
            <li>
              Artificially inflating rankings through fake interactions is
              prohibited.
            </li>
            <li>
              Honest and insightful participation is the best way to stand out.
            </li>
          </ul>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            Enforcement & Consequences
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            Violating these guidelines may lead to:
          </p>
          <ol className="list-decimal pl-5 text-[20px] text-black-600 space-y-2 mb-6">
            <li>Warnings for minor infractions.</li>
            <li>Content removal for guideline breaches.</li>
            <li>Temporary restrictions for repeated offenses.</li>
            <li>Permanent bans for severe or repeated violations.</li>
          </ol>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-[20px] font-bold mb-3">
            Join Us in Building a Great Community!
          </h2>
          <p className="text-[20px] text-black-600 mb-3">
            We're here to inspire, create, and elevate advertising discussions.
            Let's keep AdDictsNation a place where creativity and critique
            thrive responsibly!
          </p>
          <p className="text-[20px] text-black-600 mb-3">
            For further enquiries or to report an incident, kindly send an email
            to support@addictsnation.com
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default TextSection;
