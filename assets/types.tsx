import { useProductQuickView } from "/product-quick-view";
import { formatMoney } from "utils";
import { SettingsSchema } from "_types";
import { _Product_liquid, _Shop_liquid_json } from "_types";

export type _Cart_fetch_api = {
  attributes: _Cart_fetch_api_Attributes;
  note?: string;
  cart_level_discount_applications: any[];
  currency: string;
  item_count: number;
  items: _Cart_fetch_api_Items[];
  items_subtotal_price: number;
  original_total_price: number;
  requires_shipping: boolean;
  token: string;
  total_discount: number;
  total_price: number;
  total_weight: number;
};
export type _Cart_fetch_api_Attributes = {};

export type _Cart_fetch_api_ItemsFeatured_image = {
  alt: string;
  aspect_ratio: number;
  height: number;
  url: string;
  width: number;
};
export type _Cart_fetch_api_ItemsOptions_with_values = {
  name: string;
  value: string;
};
export type Discount_application = {
  type: string;
  key: string;
  title: string;
  description: string;
  value: string;
  created_at: string;
  value_type: string;
  allocation_method: string;
  target_selection: string;
  target_type: string;
  total_allocated_amount: number;
};

export type _Line_level_discount_allocations = {
  amount: number;
  discount_application: Discount_application;
};

export type Price_adjustments = {
  position: number;
  price: number;
};

export type Options = {
  name: string;
  position: number;
  value: string;
};

export type _Line_item_Selling_Plan_Price_adjustments = {
  order_count?: any;
  position: number;
  value_type: string;
  value: number;
};

export type _Line_item_Selling_Plan = {
  price_adjustments: Price_adjustments[];
  price: number;
  compare_at_price: number;
  per_delivery_price: number;
  selling_plan: {
    id: number;
    name: string;
    description?: any;
    options: Options[];
    recurring_deliveries: boolean;
    fixed_selling_plan: boolean;
    price_adjustments: _Line_item_Selling_Plan_Price_adjustments[];
  };
};

export type _Cart_fetch_api_Items = {
  discounted_price: number;
  discounts: any[];
  featured_image: _Cart_fetch_api_ItemsFeatured_image;
  final_line_price: number;
  final_price: number;
  gift_card: boolean;
  grams: number;
  handle: string;
  id: number;
  image: string;
  key: string;
  line_level_discount_allocations: _Line_level_discount_allocations[];
  line_level_total_discount: number;
  line_price: number;
  options_with_values: _Cart_fetch_api_ItemsOptions_with_values[];
  original_line_price: number;
  original_price: number;
  price: number;
  selling_plan_allocation?: _Line_item_Selling_Plan;
  product_description: string;
  product_has_only_default_variant: boolean;
  product_id: number;
  product_title: string;
  product_type: string;
  properties: { [T: string]: string };
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  total_discount: number;
  url: string;
  variant_id: number;
  variant_options: string[];
  vendor: string;
  variant_title?: string;
};

export type _Cart_fetch_api_add_input = {
  items: {
    id: number | string;
    quantity: number;
    properties?: {
      [T: string]: string;
    };
    selling_plan?: number;
  }[];
  attributes?: {
    [T: string]: string;
  };
};

export type _Cart_fetch_api_add_return = {
  items: _Cart_fetch_api_Items[];
};

export type _Cart_fetch_api_update_input = {
  updates: { [T: string | number]: number } | number[];
  attributes?: {
    [T: string]: string;
  };
};

export type CartItem = {
  id: number | string;
  quantity: number;
  properties?: {
    [T: string]: string;
  };
  selling_plan?: number;
};

declare global {
  interface Window {
    Shopify: ShopifyType;
    useGlobalProducts: any;
    useCartDrawer: any;
    useProductQuickView: any;
    /* Google Map Implementation*/
    google: any;
    lastCartItems: _Cart_fetch_api_Items[];
    product: _Product_liquid;
    focusEls: NodeListOf<HTMLElement>;
    formatMoney: typeof formatMoney;
    trapFocusElement: HTMLElement;
    product_drawer: boolean;
    transformProducts: (
      product: _Product_liquid & { hidden?: boolean }
    ) => _Product_liquid & { hidden?: boolean };
    customer?: {
      isSocietyMember?: boolean;
      percentageOff?: number;
      tags?: string[];
    };
    shop: Omit<
      _Shop_liquid_json,
      | "policies"
      | "privacy_policy"
      | "refund_policy"
      | "shipping_policy"
      | "subscription_policy"
      | "terms_of_service"
    >;
    routes: ShopRoutes;
    request_path: string;
    template: string;
    theme_settings: SettingsSchema;
    cartData: _Cart_fetch_api;
    cartProductCollections: { [handle: string]: string[] };
  }
}

export type ShopRoutes = {
  account_addresses_url: string;
  account_login_url: string;
  account_logout_url: string;
  account_recover_url: string;
  account_register_url: string;
  account_url: string;
  all_products_collection_url: string;
  cart_add_url: string;
  cart_change_url: string;
  cart_clear_url: string;
  cart_update_url: string;
  cart_url: string;
  collections_url: string;
  predictive_search_url: string;
  product_recommendations_url: string;
  root_url: string;
  search_url: string;
  file_url: string;
  asset_url: string;
};

declare const Shopify: ShopifyType;

export type ShopifyType = {
  designMode?: boolean;
  OptionSelectors: (selector: string, options: any) => void;
  cdnHost: string;
  country: string;
  currency: Currency;
  formatMoney: (price: number, format?: string) => string;
  image: Image;
  locale: string;
  modules: boolean;
  money_format: string;
  paymentButton: PaymentButton;
  routes: Routes;
  shop: string;
  theme: Theme;
};

type Currency = {
  active: string;
  rate: string;
};

type Style = {
  handle?: any;
  id?: any;
};

type Theme = {
  handle: string;
  id: number;
  name: string;
  role: string;
  style: Style;
  theme_store_id: number;
};

type Routes = {
  root: string;
};

type Image = {};

type PaymentButton = {};
