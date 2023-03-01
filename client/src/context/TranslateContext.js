import React from 'react'
import { useTranslation } from 'react-i18next';

export const TContext = React.createContext({});

export const TranslateContext = (props) => {
    const lngs = {
      en: { nativeName: 'English', flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" },
      sq: { nativeName: 'Albanian', flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png" }
    };
    
    const { t , i18n } = useTranslation();

    return (
        <TContext.Provider value={{t, i18n, lngs}}>
            {props.children}
        </TContext.Provider>
    )
}
