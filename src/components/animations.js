export const navTopVariants = {
    hidden: {
        opacity: 0,
        y: "-250px"
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            type: "spring"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: 'easeIn'
        }
    } 
}

export const slideInVariants = {
    hidden: {
        x: "-100vw"
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.3,
            duration: 0.2,
            type: "spring"
        }
    }
}

export const viewBtn = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 0.5px #000",
        boxShadow: "0px 0px 3px #f2e529",
        transition: {
            duration: 0.3
        }
    }
}
export const hoverImg = {
    hover: {
        x: [0, -2 , 2, 0],
        //scale: 1.05,
        boxShadow: "0px 0px 8px #f5f5f5",
        transition: {
            duration: 1,
            type: "spring",
            stiffness: 6,
            ease: "easeInOut",
            yoyo: Infinity
        }
    }
}