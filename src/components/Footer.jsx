import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl,intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';
import Cookies from 'js-cookie';
import { getConfig } from '@edx/frontend-platform';

import LogoRecoleta from '../assets/logo_recoleta_bco.png';
import LogoUAR from '../assets/logo_uar_bco.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook,faInstagram,faTwitter,faYoutube,faLinkedin,faSpotify} from '@fortawesome/free-brands-svg-icons';
import messages from './Footer.messages';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
  }
  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  }
  render() {
    const {
      intl,
    } = this.props;

    const { config } = this.context;
    return (
      <footer role="contentinfo" className="footer d-flex px-2 uar-footer align-items-center bg-primary justify-content-between">
        <div className="container-xl my-4">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="d-flex flex-column">
              <div className="text-center">
                <img className="uar-footer-logo mb-4 mx-4" src={LogoRecoleta} alt="Logo Recoleta"/>
              </div>
              <div className="text-center">
                <img className="uar-footer-logo mb-4 mx-4" src={LogoUAR} alt="Logo UAR"/>
              </div>
            </div>
            <div className="d-flex flex-column text-white mt-4 mt-md-0">
              <div className="text-white uar-font-12p mb-2">Siguenos</div>
              <div className="text-white uar-font-12p">
                <a href="https://www.facebook.com/universidadabiertarecoletauar" target="_blank" className="uar-footer-rrss-link">
                  <div className="uar-footer-icon-container uar-footer-icon-facebook"><FontAwesomeIcon icon={faFacebook} fixedWidth className="uar-footer-icon"/></div>
                  <div className="uar-footer-link-text">universidadabiertarecoletauar</div>
                </a>
              </div>
              <div className="text-white uar-font-12p">
                <a href="https://www.instagram.com/uderecoleta/" target="_blank" className="uar-footer-rrss-link">
                  <div className="uar-footer-icon-container uar-footer-icon-instagram"><FontAwesomeIcon icon={faInstagram} fixedWidth className="uar-footer-icon"/></div>
                  <div className="uar-footer-link-text">@uderecoleta</div>
                </a>
              </div>
              <div className="text-white uar-font-12p">
                <a href="https://twitter.com/UdeRecoleta" target="_blank" className="uar-footer-rrss-link">
                  <div className="uar-footer-icon-container uar-footer-icon-twitter"><FontAwesomeIcon icon={faTwitter} fixedWidth className="uar-footer-icon"/></div>
                  <div className="uar-footer-link-text">@UdeRecoleta</div>
                </a>
              </div>
              <div className="text-white uar-font-12p">
                <a href="https://www.youtube.com/c/UniversidadAbiertadeRecoleta" target="_blank" className="uar-footer-rrss-link">
                  <div className="uar-footer-icon-container uar-footer-icon-youtube"><FontAwesomeIcon icon={faYoutube} fixedWidth className="uar-footer-icon"/></div>
                  <div className="uar-footer-link-text">UniversidadAbiertadeRecoleta</div>
                </a>
              </div>
              <div className="text-white uar-font-12p">
                <a href="https://www.linkedin.com/company/universidad-abierta-de-recoleta/" target="_blank" className="uar-footer-rrss-link">
                  <div className="uar-footer-icon-container uar-footer-icon-linkedin"><FontAwesomeIcon icon={faLinkedin} fixedWidth className="uar-footer-icon"/></div>
                  <div className="uar-footer-link-text">universidad-abierta-de-recoleta</div>
                </a>
              </div>
              <div className="text-white uar-font-12p">
                <a href="https://open.spotify.com/show/0PhzkR5dKFBtyqLxTOBemX" target="_blank" className="uar-footer-rrss-link">
                  <div className="uar-footer-icon-container uar-footer-icon-spotify"><FontAwesomeIcon icon={faSpotify} fixedWidth className="uar-footer-icon"/></div>
                  <div className="uar-footer-link-text">Universidad Abierta de Recoleta</div>
                </a>
              </div>
              <div className="font-weight-bold uar-font- mt-4 uar-font-15p">
                <span>Contacto: </span>
                <a className="text-white font-weight-bold uar-font uar-font-15p" href="mailto:info@uarecoleta.cl">info@uarecoleta.cl</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
SiteFooter.propTypes = {
  intl: intlShape.isRequired,
};

SiteFooter.contextType = AppContext;
export default injectIntl(SiteFooter);
export { EVENT_NAMES };
