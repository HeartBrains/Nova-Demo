
import React from 'react';

export enum View {
  LOGIN = 'LOGIN',
  CATALOG = 'CATALOG',
  PRODUCT_CATALOG = 'PRODUCT_CATALOG',
  QUOTATION = 'QUOTATION',
  ORDER_TRACKING = 'ORDER_TRACKING',
  DASHBOARD_AGENT = 'DASHBOARD_AGENT',
  DASHBOARD_ADMIN = 'DASHBOARD_ADMIN',
  DASHBOARD_GRAPHIC = 'DASHBOARD_GRAPHIC',
  DASHBOARD_DESIGNER = 'DASHBOARD_DESIGNER',
  DESIGN_COLLAB = 'DESIGN_COLLAB',
}

export enum Role {
  AGENT = 'Agent',
  DESIGNER = 'Designer',
  GRAPHIC = 'Graphic',
  ADMIN = 'Admin',
}

export interface NavGroup {
  name: string;
  items: {
    label: string;
    view: View;
    icon: React.ElementType;
  }[];
}
