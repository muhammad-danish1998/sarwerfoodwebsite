import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      
        "restaurantoption":"Restaurant option"
        ,
        "minimumorder":
           "Minimum order"
        ,
        "minutes":
           "Min"
        ,
        "min":
           "Min"
        ,
        "colophon":
           "Colophon"
        ,
        "totalpayable":
           "Total payable"
        ,
        "iepleasedontringthebellbabyissleeping":
           "ie: Please don't ring the bell. baby is sleeping."
        ,
        "payment":
           "Payment"
        ,
        "login":
           "Login"
        ,
        "footercopyrights":
           "\u00a9 liefermars.de 2022"
        ,
        "pickup":
           "Pickup"
        ,
        "termsandconditions":
           "Terms & conditions"
        ,
        "note":
           "Note"
        ,
        "addnoteoptional":
           "Add note (optional)"
        ,
        "cashondelivery":
           "Cash on delivery"
        ,
        "alreadyregisteredsignin":
           "Already registered? sign in"
        ,
        "orderandpay":
           "Order and pay"
        ,
        "socialmediaandapps":
           "Find us on"
        ,
        "restaurantratings":
           "Ratings"
        ,
        "paywithcard":
           "Pay with card"
        ,
        "cookies":
           "Accept cookies"
        ,
        "dataprivacy":
           "Data privacy"
        ,
        "emaiaddress":
           "Email address"
        ,
        "rememberme":
           "Remember me"
        ,
        "flooroptional":
           "Floor (optional)"
        ,
        "enteryouremail":
           "Enter your e-mail"
        ,
        "opennow":
           "Open now "
        ,
        "close":
           "Close"
        ,
        "registerhere":
           "Register here"
        ,
        "home":
           "Home"
        ,
        "yourname":
           "Your name "
        ,
        "japan":
           "Japanese"
        ,
        "loginnow":
           "Login now"
        ,
        "notamember":
           "Not a member? "
        ,
        "contactus":
           "Contact"
        ,
        "lebanese":
           "Lebanese"
        ,
        "homebannertxt":
           "Liefermars is the best online food order management system."
        ,
        "recovermypassword":
           "Recover my password"
        ,
        "minimumorderamount":
           "Minimum order amount"
        ,
        "orloginwith":
           "Or login with "
        ,
        "enterpassword":
           "Enter password"
        ,
        "paypal":
           "Paypal"
        ,
        "personalinformation":
           "Personal information"
        ,
        "zip":
           "Zip"
        ,
        "asap":
           "Asap"
        ,
        "streetname":
           "Street"
        ,
        "repeatyourpassword":
           "Repeat your password *"
        ,
        "apartmentorsuite":
           "Apartment or suite"
        ,
        "signin":
           "Sign in"
        ,
        "register":
           "Register"
        ,
        "location":
           "Location"
        ,
        "indian":
           "Indian"
        ,
        "chinese":
           "Chinese"
        ,
        "italian":
           "Italian"
        ,
        "thai":
           "Thai"
        ,
        "american":
           "American"
        ,
        "turkish":
           "Turkish"
        ,
        "grecian":
           "Grecian"
        ,
        "ordernow":
           "Order now"
        ,
        "exploreus":
           "Explore us"
        ,
        "contact":
           "Contact"
        ,
        "email":
           "Email"
        ,
        "weaccept":
           "We accept"
        ,
        "delivery":
           "Delivery"
        ,
        "freedelivery":
           "Free delivery "
        ,
        "clearfilter":
           "Clear filter"
        ,
        "menu":
           "Menu "
        ,
        "reviews":
           "Reviews"
        ,
        "restaurantinfo":
           "Restaurant info"
        ,
        "yourshoppingcartisempty":
           "Your shopping cart is empty."
        ,
        "readmore":
           "Read more"
        ,
        "addtocart":
           "Add to cart"
        ,
        "noreviewfound":
           "No review found"
        ,
        "deliverycosts":
           "Delivery costs"
        ,
        "openinghours":
           "Opening hours"
        ,
        "closedfordelivery":
           "Closed for delivery"
        ,
        "monday":
           "Monday"
        ,
        "tuesday":
           "Tuesday"
        ,
        "wednesday":
           "Wednesday"
        ,
        "thursday":
           "Thursday"
        ,
        "friday":
           "Friday"
        ,
        "saturday":
           "Saturday"
        ,
        "sunday":
           "Sunday"
        ,
        "totalpurchase":
           "Total purchase"
        ,
        "deliveryfee":
           "Delivery fee"
        ,
        "yourorder":
           "Your order"
        ,
        "housenumber":
           "House number"
        ,
        "apartmentoptional":
           "Apartment(optional)"
        ,
        "city":
           "City"
        ,
        "companyoptional":
           "Company (optional)"
        ,
        "name":
           "Name"
        ,
        "phone":
           "Phone"
        ,
        "youexamplecom":
           "You@example.com"
        ,
        "deliverytime":
           "Delivery time"
        ,
        "signup":
           "Sign up"
        ,
        "msgprofileupdated":
           "Your profile has been successfully updated .please wait for refresh your page."
        ,
        "msgprofileimgremv":
           "Profile image is remove. Please wait for refresh your page."
        ,
        "msgrestnotdeliverzip":
           "This restaurant is not deliver to your current zip code"
        ,
        "msgcnfrmemailfrgtpass":
           "A confirmation email has been mailed.Please check your mail box for the token link."
        ,
        "msgemailnotreggistered":
           "This email is not registered."
        ,
        "msginvalidemailpass":
           "Invalid login please enter a valid email and password"
        ,
        "msgadrscrtd":
           "Address created successfully. please wait..."
        ,
        "msgadrsupdt":
           "Address update successfully. please wait..."
        ,
        "msgcntctadmn":
           "Something happened please try again or contact website administrator."
        ,
        "msgpasschngd":
           "Password changed successfully"
        ,
        "msgoldpassentr":
           "Please enter valid old password."
        ,
        "msgreqsndsuccess":
           "Request has been successfully send."
        ,
        "msgslctdrstrntclsd":
           "The restaurant you have selected is currently closed. you can go back to restaurant list and pick another restaurant to order."
        ,
        "adrsdltd":
           "Address deleted successfully"
        ,
        "noadrsfnd":
           "No address found in database . please wait for redirect"
        ,
        "dnthvorder":
           "You dont have any order."
        ,
        "emailalrdyexistreg":
           "Sorry this email address is already exist please choose different email for registration."
        ,
        "norstfndtharea":
           "No restaurants found in this specific area!"
        ,
        "msgemailnotreggisteredoract":
           "This email is not registered or already activated."
        ,
        "usrcrtdscsfl":
           "User created successfully. please wait\u2026"
        ,
        "existingcustq":
           "Existing customer?"
        ,
        "clicktologin":
           "Click here to login"
        ,
        "forgetpassword":
           "Forget password"
        ,
        "logout":
           "Logout"
        ,
        "about":
           "About us"
        ,
        "profile":
           "Profile"
        ,
        "myreviews":
           "My reviews"
        ,
        "mydeliveryaddress":
           "My delivery address"
        ,
        "address":
           "Address"
        ,
        "myorder":
           "My orders"
        ,
        "accountsettings":
           "Account settings"
        ,
        "changepassword":
           "Change password"
        ,
        "welcometo":
           "Welcome to"
        ,
        "abouttxtcontent":
           "About us text lorem ipsum"
        ,
        "telephonehelp":
           "Telephone help"
        ,
        "pleasecall":
           "Please call"
        ,
        "emailhelp":
           "Email help"
        ,
        "plzsendusemail":
           "Please send us email"
        ,
        "sendyourrequest":
           "Send your request"
        ,
        "dashboard":
           "Dashboard"
        ,
        "suggestedrestaurant":
           "Suggested restaurants"
        ,
        "addnewaddress":
           "Add new address"
        ,
        "optional":
           "Optional"
        ,
        "save":
           "Save"
        ,
        "newaddress":
           "New address"
        ,
        "orderdetail":
           "Order detail"
        ,
        "profileimage":
           "Profile image"
        ,
        "gender":
           "Gender"
        ,
        "male":
           "Male"
        ,
        "female":
           "Female"
        ,
        "other":
           "Other"
        ,
        "chooseyouroption":
           "Choose your option"
        ,
        "oldpassword":
           "Old password"
        ,
        "newpassword":
           "New password"
        ,
        "repeatnewpassword":
           "Repeat new password"
        ,
        "goback":
           "Go Back"
        ,
        "companyregister":
           "Company Register"
        ,
        "registeryourrestaurant":
           "Register Your Restaurant"
        ,
        "registerrestaurant":
           "Register Restaurants"
        ,
        "loginhistory":
           "Login History"
        ,
        "yourrestaurantname":
           "Your Restaurant Name"
        ,
        "yourrestaurantphone":
           "Your Restaurant Phone"
        ,
        "yourrestaurantemail":
           "Your Restaurant Email"
        ,
        "yourrestaurantaddress":
           "Your Restaurant Address"
        ,
        "closed":
           "Closed"
        ,
        "account":
           "Account"
        ,
        "order":
           "Order"
        ,
        "loadmore":
           "Load More"
        ,
        "firstname":
           "First Name"
        ,
        "lastname":
           "Last Name"
        ,
        "country":
           "Country"
        ,
        "status":
           "Status"
        ,
        "norecfnd":
           "No records found..."
        ,
        "active":
           "Active"
        ,
        "inactive":
           "Inactive"
        ,
        "checkout":
           "Checkout"
        ,
        "fillinnewadr":
           "Fill in new address"
        ,
        "pleaseenterhousenum":
           "Please enter your House Number."
        ,
        "zipcodereq":
           "Zip code required"
        ,
        "sndyrmsg":
           "Send Your Message"
        ,
        "submitnow":
           "Submit Now"
        ,
        "areyousure":
           "Are you sure?"
        ,
        "reallywanttodelete":
           "Do you really want to delete these records? This process cannot be undone."
        ,
        "cancel":
           "Cancel"
        ,
        "delete":
           "Delete"
        ,
        "or":
           "or"
        ,
        "questions":
           "Questions"
        ,
        "perfmrng":
           "Performance Range"
        ,
        "setting":
           "Setting"
        ,
        "fnameisreq":
           "Valid first name is required."
        ,
        "phonenumreq":
           "Valid your phone is required."
        ,
        "lnameisreq":
           "Valid last name is required."
        ,
        "validemailreq":
           "Please enter a valid email."
        ,
        "cityreq":
           "City required."
        ,
        "pleaseenterstrname":
           "Please enter your street name."
        ,
        "yourmsg":
           "Your Message"
        ,
        "subject":
           "Subject"
        ,
        "typereviewhere":
           "Type Review Here"
        ,
        "entertitle":
           "Enter title"
        ,
        "whatisyrreview":
           "What is your review"
        ,
        "searchproduct":
           "Search Product"
        ,
        "restaurantsanddishes":
           "Restaurants and dishes"
        ,
        "bestmatchsort":
           "Best match"
        ,
        "estmdeliverytimesort":
           "Estimated Delivery Time"
        ,
        "mostpopularsort":
           "Most popular"
        ,
        "minorderamountsort":
           "Min. order amount"
        ,
        "alphabeticalsort":
           "Alphabetical"
        ,
        "previous_x000D_":
           "Previous_x000D_"
        ,
        "next":
           "Next"
        ,
        "editaddress":
           "Edit Address"
        ,
        "reviewpending":
           "Review Pending "
        ,
        "pending":
           "Pending"
        ,
        "accepted":
           "Accepted"
        ,
        "cooking":
           "Cooking"
        ,
        "ontheway":
           "On the Way"
        ,
        "deliverd":
           "Delivered"
        ,
        "cancelled":
           "Cancelled"
        ,
        "writereview":
           "Write Review"
        ,
        "description":
           "DESCRIPTION"
        ,
        "quantity":
           "QUENTITY"
        ,
        "price":
           "PRICE"
        ,
        "total":
           "TOTAL"
        ,
        "subtotal":
           "SUBTOTAL"
        ,
        "grandtotal":
           "GRAND TOTAL"
        ,
        "submitreview":
           "Submit Review"
        ,
        "howwasfood":
           "How was Food?"
        ,
        "howwasdelivery":
           "How was delivery?"
        ,
        "whatwasdeliverytime":
           "What was Delivery Time"
        ,
        "invoicecreatedoncomputer":
           "Invoice was created on a computer and is valid without the signature and seal."
        ,
        "showfilter":
           "Show Filter",
        
        "noprodfound":
           "No Product Found"
        ,
        "savefornextorder":
           "Save these remarks for your next order."
        ,
        "mint":
           "Min"
        ,
        "nocategoryfound":
           "No category found."
        
     
    }
  },
  de: {
    translation :{
      "restaurantoption":
      "Restaurantoption"
   ,
   "minimumorder":
      "Mindestbestellung"
   ,
   "minutes":
      "Minuten",
      "min":
      "Mindest"
   ,
   "colophon":
      "Kolophon"
   ,
   "totalpayable":
      "Total bezahlbar"
   ,
   "iepleasedontringthebellbabyissleeping":
      "Dh: bitte nicht klingeln. baby schl\u00e4ft."
   ,
   "payment":
      "Zahlung"
   ,
   "login":
      "Anmeldung"
   ,
   "footercopyrights":
      "\u00a9 liefermars.de 2022"
   ,
   "pickup":
      "Abholung"
   ,
   "termsandconditions":
      "Agb (allgemeine geschaftsbedingungen"
   ,
   "note":
      "Anmerkung"
   ,
   "addnoteoptional":
      "Anmerkung"
   ,
   "cashondelivery":
      "Barzahlung "
   ,
   "alreadyregisteredsignin":
      "Bereits"
   ,
   "orderandpay":
      "Bestellen"
   ,
   "socialmediaandapps":
      "Besuchen sie uns"
   ,
   "restaurantratings":
      "Bewertungen"
   ,
   "paywithcard":
      "Bezahlen"
   ,
   "cookies":
      "Cookies akzeptieren"
   ,
   "dataprivacy":
      "Datenschutz"
   ,
   "emaiaddress":
      "Emailadresse"
   ,
   "rememberme":
      "Erinnere"
   ,
   "flooroptional":
      "Etage"
   ,
   "enteryouremail":
      "Geben sie ihre e-mail adresse ein"
   ,
   "opennow":
      "Geoffnet"
   ,
   "close":
      "Geschlossen"
   ,
   "registerhere":
      "Hier"
   ,
   "home":
      "Homepage"
   ,
   "yourname":
      "Ihren"
   ,
   "japan":
      "Japanisch"
   ,
   "loginnow":
      "Jetzt"
   ,
   "notamember":
      "Kein"
   ,
   "contactus":
      "Kontakt"
   ,
   "lebanese":
      "Lebanesisch"
   ,
   "homebannertxt":
      "Liefermars ist eine online essen bestellplatform"
   ,
   "recovermypassword":
      "Mein"
   ,
   "minimumorderamount":
      "Mindestbestellwert"
   ,
   "orloginwith":
      "Oder"
   ,
   "enterpassword":
      "Passwort"
   ,
   "paypal":
      "Paypal"
   ,
   "personalinformation":
      "Pers\u00f6nliche daten"
   ,
   "zip":
      "Postleitzahl"
   ,
   "asap":
      "Schnellstm\u00f6glich"
   ,
   "streetname":
      "Strasse"
   ,
   "repeatyourpassword":
      "Wiederhole"
   ,
   "apartmentorsuite":
      "Wohnung"
   ,
   "signin":
      "Einloggen"
   ,
   "register":
      "Registrieren"
   ,
   "location":
      "Ort"
   ,
   "indian":
      "Indisch"
   ,
   "chinese":
      "Chinesisch"
   ,
   "italian":
      "Italienisch"
   ,
   "thai":
      "Thai"
   ,
   "american":
      "Amerikanisch"
   ,
   "turkish":
      "Turkisch"
   ,
   "grecian":
      "Griechisch"
   ,
   "ordernow":
      "Jetzt bestellen"
   ,
   "exploreus":
      "Entdecken sie uns"
   ,
   "contact":
      "Kontakt"
   ,
   "email":
      "Email"
   ,
   "weaccept":
      "Wir akzeptieren"
   ,
   "delivery":
      "Lieferung"
   ,
   "freedelivery":
      "Kostenlose lieferung "
   ,
   "clearfilter":
      "Filter l\u00f6schen"
   ,
   "menu":
      "Speisekarte "
   ,
   "reviews":
      "Bewertungen"
   ,
   "restaurantinfo":
      "Restaurantinfos"
   ,
   "yourshoppingcartisempty":
      "Dein einkaufswagen ist leer."
   ,
   "readmore":
      "Weiterlesen"
   ,
   "addtocart":
      "In den warenkorb legen"
   ,
   "noreviewfound":
      "Keine bewertung gefunden"
   ,
   "deliverycosts":
      "Versandkosten"
   ,
   "openinghours":
      "\u00d6ffnungszeiten"
   ,
   "closedfordelivery":
      "Wegen auslieferung geschlossen"
   ,
   "monday":
      "Montag"
   ,
   "tuesday":
      "Dienstag"
   ,
   "wednesday":
      "Mittwoch"
   ,
   "thursday":
      "Donnerstag"
   ,
   "friday":
      "Freitag"
   ,
   "saturday":
      "Samstag"
   ,
   "sunday":
      "Sonntag"
   ,
   "totalpurchase":
      "Gesamteinkauf"
   ,
   "deliveryfee":
      "Versandkosten"
   ,
   "yourorder":
      "Deine bestellung"
   ,
   "housenumber":
      "Hausnummer"
   ,
   "apartmentoptional":
      "Wohnung (optional)"
   ,
   "city":
      "Stadt"
   ,
   "companyoptional":
      "Firma (optional)"
   ,
   "name":
      "Name"
   ,
   "phone":
      "Telefon"
   ,
   "youexamplecom":
      "Du@example.com"
   ,
   "deliverytime":
      "Lieferzeit"
   ,
   "signup":
      "Anmelden"
   ,
   "msgprofileupdated":
      "Ihr profil wurde erfolgreich aktualisiert. bitte warten sie, bis ihre seite aktualisiert wurde."
   ,
   "msgprofileimgremv":
      "Profilbild ist entfernen. bitte warten sie, bis ihre seite aktualisiert wurde."
   ,
   "msgrestnotdeliverzip":
      "Dieses restaurant liefert nicht an ihre aktuelle postleitzahl"
   ,
   "msgcnfrmemailfrgtpass":
      "Eine best\u00e4tigungs-e-mail wurde verschickt. bitte \u00fcberpr\u00fcfen sie ihr postfach auf den token-link."
   ,
   "msgemailnotreggistered":
      "Diese e-mail ist nicht registriert."
   ,
   "msginvalidemailpass":
      "Ung\u00fcltige anmeldung, bitte geben sie eine g\u00fcltige e-mail-adresse und ein g\u00fcltiges passwort ein"
   ,
   "msgadrscrtd":
      "Adresse erfolgreich erstellt. warten sie mal\u2026"
   ,
   "msgadrsupdt":
      "Adressaktualisierung erfolgreich. warten sie mal\u2026"
   ,
   "msgcntctadmn":
      "Es ist etwas passiert, bitte versuchen sie es erneut oder wenden sie sich an den website-administrator."
   ,
   "msgpasschngd":
      "Das passwort wurde erfolgreich ge\u00e4ndert"
   ,
   "msgoldpassentr":
      "Bitte g\u00fcltiges altes passwort eingeben."
   ,
   "msgreqsndsuccess":
      "Anfrage wurde erfolgreich gesendet."
   ,
   "msgslctdrstrntclsd":
      "Das von ihnen ausgew\u00e4hlte restaurant ist derzeit geschlossen. sie k\u00f6nnen zur restaurantliste zur\u00fcckkehren und ein anderes restaurant zum bestellen ausw\u00e4hlen."
   ,
   "adrsdltd":
      "Adresse erfolgreich gel\u00f6scht"
   ,
   "noadrsfnd":
      "Keine adresse in der datenbank gefunden . bitte warten sie auf die weiterleitung"
   ,
   "dnthvorder":
      "Sie haben keine bestellung."
   ,
   "emailalrdyexistreg":
      "Entschuldigung, diese e-mail-adresse existiert bereits. bitte w\u00e4hlen sie eine andere e-mail-adresse f\u00fcr die registrierung."
   ,
   "norstfndtharea":
      "Keine restaurants in diesem bestimmten gebiet gefunden!"
   ,
   "msgemailnotreggisteredoract":
      "Diese e-mail ist nicht registriert oder bereits aktiviert."
   ,
   "usrcrtdscsfl":
      "Benutzer erfolgreich erstellt. warten sie mal\u2026"
   ,
   "existingcustq":
      "Bestandskunde?"
   ,
   "clicktologin":
      "Klicken sie hier, um sich einzuloggen"
   ,
   "forgetpassword":
      "Passwort vergessen"
   ,
   "logout":
      "Ausloggen"
   ,
   "about":
      "Uber uns"
   ,
   "profile":
      "Profil"
   ,
   "myreviews":
      "Meine bewertungen"
   ,
   "mydeliveryaddress":
      "Meine lieferadresse"
   ,
   "address":
      "Adresse"
   ,
   "myorder":
      "Meine bestellungen"
   ,
   "accountsettings":
      "Account einstellungen"
   ,
   "changepassword":
      "Passwort andern"
   ,
   "welcometo":
      "Willkommen zu"
   ,
   "abouttxtcontent":
      "Uber uns text lorem ipsum"
   ,
   "telephonehelp":
      "Telefonische hilfe"
   ,
   "pleasecall":
      "Rufen sie bitte"
   ,
   "emailhelp":
      "E-mail-hilfe"
   ,
   "plzsendusemail":
      "Bitte senden sie uns eine e-mail"
   ,
   "sendyourrequest":
      "Senden sie ihre anfrage"
   ,
   "dashboard":
      "Armaturenbrett"
   ,
   "suggestedrestaurant":
      "Empfohlene restaurants"
   ,
   "addnewaddress":
      "Neue adresse hinzufugen"
   ,
   "optional":
      "Optional"
   ,
   "save":
      "Speichern"
   ,
   "newaddress":
      "Neue adresse"
   ,
   "orderdetail":
      "Bestelldetails"
   ,
   "profileimage":
      "Profilbild"
   ,
   "gender":
      "Geschlecht"
   ,
   "male":
      "M\u00e4nnlich"
   ,
   "female":
      "Weiblich"
   ,
   "other":
      "Sonstiges"
   ,
   "chooseyouroption":
      "W\u00e4hlen sie ihre option"
   ,
   "oldpassword":
      "Altes passwort"
   ,
   "newpassword":
      "Neues passwort"
   ,
   "repeatnewpassword":
      "Wiederhole das neue passwort"
   ,
   "goback":
      "Geh zuruck"
   ,
   "companyregister":
      "Firmenregister"
   ,
   "registeryourrestaurant":
      "Registrieren Sie Ihr Restaurant"
   ,
   "registerrestaurant":
      "Restaurants registrieren"
   ,
   "loginhistory":
      "Anmeldeverlauf"
   ,
   "yourrestaurantname":
      "Ihr Restaurantname"
   ,
   "yourrestaurantphone":
      "Ihr Restaurant-Telefon"
   ,
   "yourrestaurantemail":
      "Ihre Restaurant-E-Mail"
   ,
   "yourrestaurantaddress":
      "Ihre Restaurantadresse"
   ,
   "closed":
      "Abgeschlossen"
   ,
   "account":
      "Konto"
   ,
   "order":
      "bestellen"
   ,
   "loadmore":
      "Mehr laden"
   ,
   "firstname":
      "Vorname"
   ,
   "lastname":
      "Nachname"
   ,
   "country":
      "Land"
   ,
   "status":
      "Status"
   ,
   "norecfnd":
      "Keine Aufzeichnungen gefunden..."
   ,
   "active":
      "Aktiv"
   ,
   "inactive":
      "Inaktiv"
   ,
   "checkout":
      "Kasse"
   ,
   "fillinnewadr":
      "Neue Adresse eingeben"
   ,
   "pleaseenterhousenum":
      "Bitte geben Sie Ihre Hausnummer ein."
   ,
   "zipcodereq":
      "Postleitzahl erforderlich"
   ,
   "sndyrmsg":
      "Senden Sie Ihre Nachricht"
   ,
   "submitnow":
      "Jetzt Absenden"
   ,
    }
}
  };
 

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;