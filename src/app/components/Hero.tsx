"use client";

import SecurityProfile from "./SecurityProfile";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";


export default function Hero() {

  return (

    <section
      className="
      min-h-screen
      flex
      items-center
      max-w-7xl
      mx-auto
      px-8
      pt-20
      "
    >


      <motion.div

        variants={staggerContainer}

        initial="hidden"

        animate="visible"

        className="
        grid
        md:grid-cols-2
        gap-16
        items-center
        w-full
        "

      >



        {/* LEFT CONTENT */}


        <motion.div
          variants={fadeUp}
        >


          <p
            className="
            text-blue-400
            uppercase
            tracking-[0.3em]
            text-sm
            font-medium
            "
          >

            Cybersecurity Professional

          </p>




          <h1

            className="
            text-5xl
            md:text-6xl
            font-bold
            leading-[1.1]
            mt-6
            "

          >

            Protecting Digital Assets Through


            <span

              className="
              block
              mt-3
              bg-linear-to-r
              from-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
              "

            >

              Risk Management,
              <br />

              Governance &
              <br />

              Security Strategy

            </span>


          </h1>





          <p

            className="
            mt-7
            text-gray-400
            text-lg
            leading-relaxed
            max-w-xl
            "

          >

            Specializing in Governance, Risk & Compliance,
            cybersecurity frameworks, security assessments,
            and enterprise security improvement through
            practical risk-based solutions.

          </p>






          {/* ACTION BUTTONS */}



          <motion.div

            variants={fadeUp}

            className="
            flex
            gap-5
            mt-10
            flex-wrap
            "

          >



            <motion.button

              whileHover={{
                scale:1.05
              }}

              whileTap={{
                scale:0.98
              }}

              className="
              bg-blue-500
              hover:bg-blue-600
              transition
              px-7
              py-4
              rounded-xl
              font-semibold
              shadow-lg
              shadow-blue-500/20
              "

            >

              Explore Security Case Studies


            </motion.button>






            <motion.button


              whileHover={{
                scale:1.05
              }}


              whileTap={{
                scale:0.98
              }}


              className="
              border
              border-white/20
              hover:border-blue-400
              transition
              px-7
              py-4
              rounded-xl
              "

            >

              Download Resume


            </motion.button>



          </motion.div>







          {/* SECURITY EXPERTISE TAGS */}



          <motion.div


            variants={fadeUp}


            className="
            flex
            flex-wrap
            gap-3
            mt-10
            "

          >



            {

              [

                "GRC",

                "ISO 27001",

                "Risk Assessment",

                "Security Compliance",

                "NIST CSF"


              ].map((skill)=>(



                <motion.span


                  key={skill}


                  whileHover={{

                    y:-4

                  }}


                  className="

                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  text-sm
                  text-gray-300
                  backdrop-blur

                  "


                >

                  {skill}


                </motion.span>


              ))


            }



          </motion.div>








          {/* SECURITY STATUS + MONITORING */}



          <motion.div


            variants={fadeUp}


            className="
            mt-10
            "

          >



            {/* LIVE STATUS */}


            <div

              className="
              flex
              items-center
              gap-3
              text-sm
              text-gray-400
              "

            >


              <span

                className="
                h-3
                w-3
                rounded-full
                bg-green-400
                animate-pulse
                "

              />


              <span className="
              uppercase
              tracking-wider
              ">
                Security Profile Active
              </span>


            </div>






            {/* MONITORING LIST */}



            <div

              className="
              mt-5
              border-l
              border-white/10
              pl-5
              space-y-2
              text-sm
              text-gray-500
              "

            >


              <p className="
              text-gray-400
              font-medium
              ">
                Monitoring:
              </p>


              <p>
                Risk Management
              </p>


              <p>
                Compliance
              </p>


              <p>
                Framework Analysis
              </p>


              <p>
                Security Documentation
              </p>


            </div>



          </motion.div>






        </motion.div>









        {/* RIGHT PROFILE */}



        <motion.div

          variants={fadeUp}

          animate={{

            y:[0,-10,0]

          }}


          transition={{

            duration:5,

            repeat:Infinity,

            ease:"easeInOut"

          }}

        >


          <SecurityProfile />


        </motion.div>





      </motion.div>



    </section>


  );

}