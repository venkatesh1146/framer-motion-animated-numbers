import dynamic from "next/dynamic";

const AnimatedRollingNumber = dynamic(() => import("./AnimatedRollingNumber"), {
    ssr: false
});

export default AnimatedRollingNumber;
