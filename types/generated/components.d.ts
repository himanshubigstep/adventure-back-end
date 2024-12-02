import type { Schema, Struct } from '@strapi/strapi';

export interface AllSectionsIntroductionHeading extends Struct.ComponentSchema {
  collectionName: 'components_all_sections_introduction_headings';
  info: {
    displayName: 'Introduction-heading';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button: Schema.Attribute.String;
    button_link: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
  };
}

export interface FaqsFrequentlyAsked extends Struct.ComponentSchema {
  collectionName: 'components_faqs_frequently_askeds';
  info: {
    displayName: 'frequently_asked';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
  };
}

export interface HeaderDataHeaderMenu extends Struct.ComponentSchema {
  collectionName: 'components_header_data_header_menus';
  info: {
    displayName: 'header_menu';
  };
  attributes: {
    item_icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    item_link: Schema.Attribute.Text;
    item_name: Schema.Attribute.String;
    submenu: Schema.Attribute.JSON;
  };
}

export interface TopBannerIntroduction extends Struct.ComponentSchema {
  collectionName: 'components_top_banner_introductions';
  info: {
    description: '';
    displayName: 'Introduction';
  };
  attributes: {
    cta_1: Schema.Attribute.String;
    cta_1_link: Schema.Attribute.Text;
    cta_2: Schema.Attribute.String;
    cta_2_link: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'all-sections.introduction-heading': AllSectionsIntroductionHeading;
      'faqs.frequently-asked': FaqsFrequentlyAsked;
      'header-data.header-menu': HeaderDataHeaderMenu;
      'top-banner.introduction': TopBannerIntroduction;
    }
  }
}
