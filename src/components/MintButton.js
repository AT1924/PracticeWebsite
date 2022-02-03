import React from "react";
import Button from "@material-tailwind/react/Button";

export default function MintButton() {
    return (
        <Button
            color="lightBlue"
            buttonType="outline"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="dark"
        >
            Button
        </Button>
    )
}