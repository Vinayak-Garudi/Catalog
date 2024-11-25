import React from "react";
import { Slider, SliderValue } from "@nextui-org/react";

interface sliderProps {
  label?: string;
  name?: string;
  color?:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  step?: number;
  value?: number;
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  orientation?: "horizontal" | "vertical";
  showSteps?: boolean;
  showTooltip?: boolean;
  marks?: any[];
  showOutline?: boolean;
  hideValue?: boolean;
  hideThumb?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  getValue?: (value: SliderValue) => string;
  onChange?: (value: any) => void;
  className?: string;
}

const SliderComponent: React.FC<React.PropsWithChildren<sliderProps>> = ({
  label = "",
  name = "",
  color = "foreground",
  size = "md",
  radius = "full",
  step = 1,
  value,
  defaultValue = 0,
  minValue = 0,
  maxValue,
  orientation = "horizontal",
  showSteps,
  showTooltip,
  marks,
  showOutline,
  hideValue,
  hideThumb,
  isDisabled,
  disableAnimation,
  getValue,
  onChange,
  className,
}) => {
  return (
    <Slider
      label={label}
      color={color}
      size={size}
      radius={radius}
      step={step}
      marks={marks}
      defaultValue={defaultValue}
      minValue={minValue}
      maxValue={maxValue}
      getValue={getValue}
      onChange={onChange}
      onPointerMove={(e) => e.stopPropagation()}
      className={`max-w-md ${className ?? ""}`}
    />
  );
};

export default SliderComponent;
