import * as React from "react";
import Icon from "../Icon";

type ToggleProps = {
    checked: boolean;
    onToggleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    isDisabled?: boolean;
    onIcon?: string;
    offIcon?: string;
};
const Toggle = ({
    checked,
    onToggleChange,
    isDisabled = false,
    onIcon,
    offIcon,
}: ToggleProps) => (
    <div className="toggle">
        {onIcon && (
            <div className="toggle__icon--on">
                <Icon size={20} title={onIcon} />
            </div>
        )}
        {offIcon && (
            <div className="toggle__icon--off">
                <Icon size={20} title={offIcon} />
            </div>
        )}
        <label className="toggle__label" htmlFor="toggle">
            <input
                type="checkbox"
                checked={checked}
                onChange={onToggleChange}
                disabled={isDisabled}
                id="toggle"
            />
            <span className="toggle__switch" />
        </label>
    </div>
);

export default Toggle;
