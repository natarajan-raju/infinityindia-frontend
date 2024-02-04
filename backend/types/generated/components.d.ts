import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemInfoItemInfo extends Schema.Component {
  collectionName: 'components_item_info_item_infos';
  info: {
    displayName: 'item-info';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    gallery: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'item-info.item-info': ItemInfoItemInfo;
    }
  }
}
