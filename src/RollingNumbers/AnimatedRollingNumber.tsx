import React, { memo } from "react";
import AnimatedNumbers from "react-animated-numbers";

interface IProps {
    amount: number;
    locale?: string;
}

const RollingNumber = ({ amount, locale = "en-IN" }: IProps) => {
    return (
        <AnimatedNumbers
            animateToNumber={Math.round(amount)}
            includeComma={true}
            locale={locale}
            fontStyle={{fontSize:"32px"}}
        ></AnimatedNumbers>
    );
};

export default memo(RollingNumber);
