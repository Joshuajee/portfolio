import React, { ReactNode } from "react"
import Container from "./utils/Container"



const HeroSection = () => {
    return (
        <Container full={true}>

            <div className="flex justify-center items-center">

                <div>

                    <h3 data-aos-once={true} data-aos-delay={6 * 100} data-aos="fade-in" className='text-[#5EF4DA]'>Hello, my name is.</h3>

                    <h2 data-aos-once={true} data-aos-delay={8 * 100} data-aos="fade-up" className='text-[30px] md:text-[60px] text-[#CCD6F6] font-medium'>Joshua Evuetapha</h2>

                    <p data-aos-once={true} data-aos-delay={10 * 100} data-aos="fade-up" className='text-[30px] md:text-[60px] text-[#8892B0]'> 
                        A Full Stack Developer & Technical Writer.
                    </p>

                    <p data-aos-once={true} data-aos-delay={12 * 100} data-aos="fade-up">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui lectus, viverra vitae sapien vel, consequat bibendum neque. Cras eu cursus ante. Phasellus id tincidunt neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi diam diam, varius sit amet finibus at, euismod sit amet diam. Integer porttitor urna in accumsan venenatis. Nam varius, neque nec consequat sagittis, turpis turpis congue metus, eget eleifend mauris orci sit amet libero. Nulla feugiat risus sed tortor convallis, et elementum mi congue.
                    </p>

                </div>

            </div>

        </Container>
    )
}

export default HeroSection