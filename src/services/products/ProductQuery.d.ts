export interface ProductQuery {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: ResultsEntity[];
  sort: CountryOrStateOrCityOrAvailableSortsEntityOrPathFromRootEntityOrSort;
  available_sorts: CountryOrStateOrCityOrAvailableSortsEntityOrPathFromRootEntityOrSort[];
  filters: FiltersEntity[];
  available_filters: AvailableFiltersEntity[];
}
export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}
export interface ResultsEntity {
  id: string;
  site_id: string;
  title: string;
  seller: Seller;
  price: number;
  prices: Prices;
  sale_price?: null;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes?: AttributesEntity[] | null;
  differential_pricing?: DifferentialPricing | null;
  original_price?: number | null;
  category_id: string;
  official_store_id?: number | null;
  domain_id: string;
  catalog_product_id?: string | null;
  tags?: string[] | null;
  order_backend: number;
  use_thumbnail_id: boolean;
  offer_score?: null;
  offer_share?: null;
  match_score?: null;
  winner_item_id?: null;
  melicoin?: null;
}
export interface Seller {
  id: number;
  permalink: string;
  registration_date: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags?: string[] | null;
  eshop?: Eshop | null;
  seller_reputation: SellerReputation;
}
export interface Eshop {
  seller: number;
  eshop_rubro?: null;
  eshop_id: number;
  nick_name: string;
  site_id: string;
  eshop_logo_url: string;
  eshop_status_id: number;
  eshop_experience: number;
  eshop_locations?: null[] | null;
}
export interface SellerReputation {
  power_seller_status?: string | null;
  level_id: string;
  metrics: Metrics;
  transactions: Transactions;
  real_level?: string | null;
  protection_end_date?: string | null;
}
export interface Metrics {
  cancellations: CancellationsOrClaimsOrDelayedHandlingTime;
  claims: CancellationsOrClaimsOrDelayedHandlingTime;
  delayed_handling_time: CancellationsOrClaimsOrDelayedHandlingTime;
  sales: Sales;
}
export interface CancellationsOrClaimsOrDelayedHandlingTime {
  period: string;
  rate: number;
  value: number;
  excluded?: Excluded | null;
}
export interface Excluded {
  real_value: number;
  real_rate: number;
}
export interface Sales {
  period: string;
  completed: number;
}
export interface Transactions {
  canceled: number;
  period: string;
  total: number;
  ratings: Ratings;
  completed: number;
}
export interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
}
export interface Prices {
  id: string;
  prices?: PricesEntity[] | null;
  presentation: Presentation;
  payment_method_prices?: null[] | null;
  reference_prices?: (ReferencePricesEntity | null)[] | null;
  purchase_discounts?: null[] | null;
}
export interface PricesEntity {
  id: string;
  type: string;
  amount: number;
  regular_amount?: number | null;
  currency_id: string;
  last_updated: string;
  conditions: Conditions;
  exchange_rate_context: string;
  metadata: Metadata;
}
export interface Conditions {
  context_restrictions?: (string | null)[] | null;
  start_time?: string | null;
  end_time?: string | null;
  eligible: boolean;
}
export interface Metadata {
  campaign_id?: string | null;
  promotion_id?: string | null;
  promotion_type?: string | null;
}
export interface Presentation {
  display_currency: string;
}
export interface ReferencePricesEntity {
  id: string;
  type: string;
  conditions: Conditions1;
  amount: number;
  currency_id: string;
  exchange_rate_context: string;
  tags?: null[] | null;
  last_updated: string;
}
export interface Conditions1 {
  context_restrictions?: string[] | null;
  start_time?: string | null;
  end_time?: string | null;
  eligible: boolean;
}
export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}
export interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}
export interface Shipping {
  free_shipping: boolean;
  mode: string;
  tags?: (string | null)[] | null;
  logistic_type: string;
  store_pick_up: boolean;
}
export interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: CountryOrStateOrCityOrAvailableSortsEntityOrPathFromRootEntityOrSort;
  state: CountryOrStateOrCityOrAvailableSortsEntityOrPathFromRootEntityOrSort;
  city: CountryOrStateOrCityOrAvailableSortsEntityOrPathFromRootEntityOrSort;
  latitude: string;
  longitude: string;
}
export interface CountryOrStateOrCityOrAvailableSortsEntityOrPathFromRootEntityOrSort {
  id: string;
  name: string;
}
export interface AttributesEntity {
  id: string;
  value_id?: string | null;
  value_struct?: null;
  attribute_group_id: string;
  source: number;
  name: string;
  value_name: string;
  values?: ValuesEntity[] | null;
  attribute_group_name: string;
}
export interface ValuesEntity {
  name: string;
  struct?: null;
  source: number;
  id?: string | null;
}
export interface DifferentialPricing {
  id: number;
}
export interface FiltersEntity {
  id: string;
  name: string;
  type: string;
  values?: FilterValue[] | null;
}
export interface FilterValue {
  id: string;
  name: string;
}
export interface AvailableFiltersEntity {
  id: string;
  name: string;
  type: string;
  values?: AvailableFilterValue[] | null;
}
export interface AvailableFilterValue {
  id: string;
  name: string;
  results: number;
}
