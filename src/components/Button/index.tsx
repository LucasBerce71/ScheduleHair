import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

function Button({ isLoading, children, ...rest }: IButtonProps) {
  
}