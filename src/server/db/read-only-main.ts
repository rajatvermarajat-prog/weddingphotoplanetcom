import { internalMainDb } from "./internal/clients";
import { createReadOnlyDelegate } from "./read-only-delegate";

export const mainReadDb = Object.freeze({
  widAdmin: createReadOnlyDelegate(internalMainDb.widAdmin),
  widCon: createReadOnlyDelegate(internalMainDb.widCon),
  widContact: createReadOnlyDelegate(internalMainDb.widContact),
  widFooter: createReadOnlyDelegate(internalMainDb.widFooter),
  widGallery: createReadOnlyDelegate(internalMainDb.widGallery),
  widHome: createReadOnlyDelegate(internalMainDb.widHome),
  widHomeGallery: createReadOnlyDelegate(internalMainDb.widHomeGallery),
  widPreWeddingPage: createReadOnlyDelegate(internalMainDb.widPreWeddingPage),
  widProduct: createReadOnlyDelegate(internalMainDb.widProduct),
  widProductImage: createReadOnlyDelegate(internalMainDb.widProductImage),
  widProductSlider: createReadOnlyDelegate(internalMainDb.widProductSlider),
  widSlide: createReadOnlyDelegate(internalMainDb.widSlide),
  widTestimonial: createReadOnlyDelegate(internalMainDb.widTestimonial),
  widVideo: createReadOnlyDelegate(internalMainDb.widVideo),
  widVideoDescription: createReadOnlyDelegate(internalMainDb.widVideoDescription),
  widWeddingPage: createReadOnlyDelegate(internalMainDb.widWeddingPage),
});
