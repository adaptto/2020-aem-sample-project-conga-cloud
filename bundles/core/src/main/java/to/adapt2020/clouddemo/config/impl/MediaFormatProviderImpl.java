package to.adapt2020.clouddemo.config.impl;

import org.osgi.service.component.annotations.Component;

import io.wcm.handler.media.spi.MediaFormatProvider;

import to.adapt2020.clouddemo.config.MediaFormats;

/**
 * Media format provider.
 */
@Component(service = MediaFormatProvider.class)
public class MediaFormatProviderImpl extends MediaFormatProvider {

  /**
   * Constructor
   */
  public MediaFormatProviderImpl() {
    super(MediaFormats.class);
  }

}
