import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";



const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "We support tech innovations that improve people's lives in all areas"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Clases",
        description: "We support tech innovations that improve people's lives in all areas"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "We support tech innovations that improve people's lives in all areas"
    },
]

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
         {/* --------------------------- header comment ----------------- */}
          <div className="md:my-5 md:w-3/5">
            <HText>MORE THAN JUST A GYM</HText>
            <p className="my-5 text-sm">We support tech innovations that improve people's lives
                in all areas. Participate in discussions, learn, and find 
                new opportunities. Explore Events. Get In Touch.</p>
          </div>
        {/* ---------------------------3 cards ----------------- */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
            {benefits.map((benefit: BenefitType) => (
                <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} 
                        setSelectedPage={setSelectedPage}/>
            ))}

        </div>



        </motion.div>

    </section>
  )
}

export default Benefits