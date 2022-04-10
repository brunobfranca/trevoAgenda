// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    dark: boolean;
    spacing: {
      tiny: number;
      small: number;
      base: number;
      large: number;
      extraLarge: number;
    };
    colors: {
      primary: string;
      secondary: string;
      title: string;
      subtitle: string;
      background: string;
      disabled: string;
      disabledSecondary: string;
      error: string;
    };
    typography: {
      fontFamily: {
        regular: string;
        bold: string;
      };
      sizes: {
        extraLarge: {
          size: number;
          lineHeight: number;
        };
        large: {
          size: number;
          lineHeight: number;
        };
        default: {
          size: number;
          lineHeight: number;
        };
        small: {
          size: number;
          lineHeight: number;
        };
        tiny: {
          size: number;
          lineHeight: number;
        };
      };
    };
  }
}

export interface IProductFieldItem {
  id: number;
  deleted: boolean;
  complementId: number;
  name: string;
  price: number;
  details: string;
  supplierId: number;
  priority: number;
  quantity: number;
}
export interface IProductField {
  id: number;
  fieldType: number;
  minQuantity: number;
  valueType: number;
  value: number;
  supplierId: number;
  price: number;
  deleted: boolean;
  name: string;
  details: string;
  priority: number;
  items: IProductFieldItem[];
}

export interface IProduct {
  id: number;
  description: string;
  discount: number;
  picture: string;
  preparationTime: number;
  subCategory: string;
  promotion: boolean;
  priority: number;
  oldPrice: number;
  category: string;
  quantity: number;
  extra: string;
  baseValue: number;
  title?: string;
  name?: string;
  fields: IProductField[];
}

export interface IAddress {
  id: number;
  deleted: boolean;
  name: string;
  street: string;
  number: number;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  postalCode: string;
  isActive: boolean;
  latitude: number;
  longitude: number;
  reference: string;
  type: number;
  userId: number;
  operating: boolean;
}

export interface ISupplierPreview {
  id: number;
  logo: string;
  fantasyName: string;
  cookTime: number;
  priority: number;
  open: boolean;
  category: string;
  voucher: boolean;
  cpfRequired: boolean;
  ownDelivery: boolean;
  exclusive: boolean;
  topAlfred: boolean;
  priceRange: number;
  sectors: any[];
  rating: {
    average: number;
    count: string;
  };
  freight: number;
  distance: number;
  banner: string;
  tags?: {
    id: number;
    name: string;
    picture: string;
  }[];
  openingHours?: {
    weekDay: string;
    schedules: {
      openAt: string;
      closeAt: string;
      enabled: boolean;
    }[];
  };
  nextOpeningHour: {
    weekDay: string;
    schedules: {
      openAt: string;
      closeAt: string;
      enabled: boolean;
    };
  };
}

export interface IOffer {
  id: number;
  price: number;
  name: string;
  description: string;
  picture: string;
  priority: number;
  discount: number;
  supplier: ISupplierPreview;
  oldPrice: number;
}

