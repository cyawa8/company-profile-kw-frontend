"use client";

import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

export default function StepGuide({ steps = [] }) {
  return (
    <div className="my-8">
      <Steps
        current={-1}
        responsive
        className="bg-transparent"
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            title={
              <p className="text-accent-950 text-sm md:text-base mt-1">
                {step.title}
              </p>}
            description={
              <p className="text-sm md:text-base mt-5">
                {step.description}
              </p>
            }
          />
        ))}
      </Steps>
    </div>
  );
}
