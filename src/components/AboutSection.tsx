import React from "react"
import Image from "next/image"
import Container from "./utils/Container"


const AboutSection = () => {
    return (
        <Container full={true}>

            <div data-aos="fade-in">

                <div className="flex">
                    <h3 className="text-3xl text-[#CCD6F6] font-semibold mb-10">About Me</h3> <hr></hr>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                    
                        <p className="mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In dui lectus, viverra vitae sapien vel, consequat bibendum 
                            neque. Cras eu cursus ante. Phasellus id tincidunt neque. 
                            Orci varius natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Morbi diam diam, varius sit amet 
                            finibus at, euismod sit amet diam. Integer porttitor urna in 
                            accumsan venenatis. Nam varius, neque nec consequat sagittis, 
                            turpis turpis congue metus, eget eleifend mauris orci sit amet
                            libero. 
                        </p>   

                        <p className="mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In dui lectus, viverra vitae sapien vel, consequat bibendum 
                            neque. Cras eu cursus ante. Phasellus id tincidunt neque. 
                            Orci varius natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Morbi diam diam, varius sit amet 
                            finibus at, euismod sit amet diam. Integer porttitor urna in 
                            accumsan venenatis. Nam varius, neque nec consequat sagittis, 
                            turpis turpis congue metus, eget eleifend mauris orci sit amet
                            libero. 
                        </p>                              


                    </div>
  
                    <div className="flex justify-center">
                        <div>
                            <Image alt="Joshua" src="/josh.png" height={371} width={320} />
                        </div>
                    </div>
                </div>

            </div>


        </Container>
    )
}

export default AboutSection