import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const DownloadResume = () => {
  const [downloading, setDownloading] = useState(false);
  const resumeUrl = "/assets/Ashutosh_Tiwari_Resume.pdf";

  const handleDownload = () => {
    // Create a temporary <a> element to trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ashutosh_Tiwari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Animate state
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {downloading ? (
          <motion.p
            key="downloading"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img
              src="assets/download.svg"
              alt="download done icon"
              className="w-5"
            />
            Resume Downloaded
          </motion.p>
        ) : (
          <motion.p
            key="download"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img
              src="assets/download.svg"
              alt="download icon"
              className="w-5"
            />
            Download Resume
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DownloadResume;
