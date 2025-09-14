import { FlipWords } from "./FlipWords"
import { motion } from "motion/react";

const HeroText = () => {
    const words = ["Scalable", "Secure", "Modern"];
    const variant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/*desktop view*/}
            <div className=" flex-col hidden md:flex c-space">
                <motion.h1 className=" text-4xl font-medium"
                    variants={variant}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hi I'm Ashutosh
                </motion.h1>
                <div className=" flex flex-col items-start">
                    <motion.p className=" text-5xl font-medium text-neutral-300"
                        variants={variant}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}>
                        {/* Turning Ideas into<br /> Meaningful Solutions through Code */}
                        A Developer <br /> Dedicated to Crafting
                    </motion.p>
                    <motion.div
                        variants={variant}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}>
                        <FlipWords
                            words={words}
                            className="font-black text-white text-8xl"
                        />
                    </motion.div>
                    <motion.p className=" text-4xl font-medium text-neutral-300"
                        variants={variant}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}>
                        Web Solutions
                    </motion.p>

                </div>

            </div>

            {/*mobileview view*/}
            <div className="flex flex-col space-y-6 md:hidden">
                <motion.p className=" text-4xl font-medium"
                    variants={variant}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}>
                    Hi I'm Ashutosh
                </motion.p>
                <div>
                    <motion.p className=" text-5xl font-black text-neutral-300"
                    variants={variant}
                initial="hidden"
                animate="visible"
                transition={{delay:1.2}}>
                    Building
                    </motion.p>
                    <motion.div
                        variants={variant}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}>
                        <FlipWords
                            words={words}
                            className="text-7xl font-bold text-white"
                        />
                    </motion.div>
                    <motion.p className=" text-4xl font-black text-neutral-300"
                        variants={variant}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}>
                        Web Applications
                    </motion.p>
                </div>
            </div>

        </div>
    )
}

export default HeroText
