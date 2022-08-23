import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useLocation, useNavigate } from 'react-router-dom';

import { LocalizationContext } from '../../../../Services/LocalizationService';

import './styles.css';

const LanguageChanger: React.FC = (): JSX.Element => {
const localizationContext = React.useContext(LocalizationContext);
    const t = localizationContext.useFormatMessage();
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnChangeLanguage = React.useCallback((nextLanguage: string) => () => {
        localizationContext.changeLanguage(nextLanguage)
        if (location.pathname !== '/') {
            const nextLocationPathName = localizationContext.getRouteTranslateByLanguage(nextLanguage, location.pathname);
            navigate(nextLocationPathName);
        }
    }, [localizationContext, location]);

    return (
        <div className="mal-car-language-changer">
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    {t({ id: `language.changer.${localizationContext.activeLanguage}` })}
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    <Dropdown.Item
                        active={localizationContext.activeLanguage === 'sk'}
                        onClick={handleOnChangeLanguage('sk')}
                    >
                        {t({ id: 'language.changer.sk' })}
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                        active={localizationContext.activeLanguage === 'cs'}
                        onClick={handleOnChangeLanguage('cs')}
                    >
                        {t({ id: 'language.changer.cs' })}
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                    active={localizationContext.activeLanguage === 'en'}
                        onClick={handleOnChangeLanguage('en')}
                    >
                        {t({ id: 'language.changer.en' })}
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default LanguageChanger;

console.log('COMPONENT NAME => ', LanguageChanger.name)
