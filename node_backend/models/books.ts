/** Book Model */

 export interface Book {
  id: string;
  location: string;
  ProductIdentifier_ISBN13_IDValue: string;
  Title_DistinctivetitlebookCovertitle_TitleText: string;
  Title_DistinctivetitlebookCovertitle_Subtitle: string;
  Publisher_PublisherName: string;
  Product_PublicationDate: string;
  Language_Languageoftext_LanguageCode: string;
  Contributor1_PersonName: string;
  Contributor2_PersonName: string;
  Contributor3_PersonName: string;
  OtherText_Maindescription_Text: string;
  Cover_File: string;
  Unique_URL: string;
}
