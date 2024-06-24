import React, { createContext, useContext } from "react";

type UnitData = {
  property: {
    listing_price?: number;
    address?: string;
    name?: string;
    city?: string;
    province?: string;
    zip?: string;
    num_of_bathroom?: number;
    num_of_bedroom?: number;
    size?: number;
    type?: string;

    listed_timestamp?: number;
    num_of_view?: number;
  };
  broker: {
    name?: string;
  };
  brokerCompany: {
    name?: string;
  };
};

// Create a context
const UnitContext = createContext<UnitData | null>(null);

export function UnitProvider({
  unitData,
  children,
}: {
  unitData: UnitData | null;
  children: React.ReactNode;
}) {
  return (
    <UnitContext.Provider value={unitData}>{children}</UnitContext.Provider>
  );
}

export function useUnitContext() {
  const context = useContext(UnitContext);

  if (!context) {
    throw new Error("useUnitContext must be used within a UnitProvider");
  }

  return context;
}
