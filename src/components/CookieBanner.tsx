import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Cookie, Settings2 } from "lucide-react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [settings, setSettings] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const toggleSetting = (type: "analytics" | "marketing") => {
    setSettings((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const saveConsent = (value: object) => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify(value)
    );

    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSaveCustom = () => {
    saveConsent({
      necessary: true,
      ...settings,
    });
  };


  if (!showBanner) return null;


  return (
    <div className="fixed bottom-0 left-0 right-0 z-[10000] p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-card/95 backdrop-blur-md border border-border rounded-xl shadow-2xl p-6 md:p-8">

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">

          <div className="flex-shrink-0">
            <div className="p-2 bg-primary/10 rounded-full">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
          </div>


          <div className="flex-1">

            <h3 className="text-lg font-semibold mb-2">
              Utilizăm cookie-uri
            </h3>


            <p className="text-sm text-muted-foreground mb-4">
              Acest site utilizează cookie-uri pentru a îmbunătăți
              experiența ta, analiza traficul și personaliza conținutul.

              <br />

              <Link
                to="/politica-de-confidentialitate"
                className="text-primary hover:underline"
              >
                Vezi Politica de Confidențialitate
              </Link>
            </p>


            <Collapsible
              open={showSettings}
              onOpenChange={setShowSettings}
            >

              <CollapsibleTrigger asChild>

                <Button
                  variant="ghost"
                  size="sm"
                  className="mb-4"
                >
                  <Settings2 className="w-4 h-4 mr-2" />

                  Setări cookie-uri

                  <ChevronDown
                    className={`w-4 h-4 ml-2 transition-transform ${
                      showSettings ? "rotate-180" : ""
                    }`}
                  />

                </Button>

              </CollapsibleTrigger>


              <CollapsibleContent className="space-y-4 mb-4 p-4 bg-muted/50 rounded-lg">


                <CookieOption
                  title="Strict necesare"
                  description="Asigură funcționarea corectă a site-ului"
                  disabled
                  enabled
                />


                <CookieOption
                  title="Analitice"
                  description="Ne ajută să înțelegem traficul"
                  enabled={settings.analytics}
                  onClick={() => toggleSetting("analytics")}
                />


                <CookieOption
                  title="Marketing"
                  description="Pentru conținut personalizat"
                  enabled={settings.marketing}
                  onClick={() => toggleSetting("marketing")}
                />


              </CollapsibleContent>

            </Collapsible>


            <div className="flex flex-col sm:flex-row gap-3">

              <Button onClick={handleAcceptAll}>
                Acceptă toate
              </Button>


              <Button
                variant="outline"
                onClick={handleRejectAll}
              >
                Respinge toate
              </Button>


              {showSettings && (
                <Button
                  variant="secondary"
                  onClick={handleSaveCustom}
                >
                  Salvează preferințele
                </Button>
              )}

            </div>


          </div>

        </div>

      </div>
    </div>
  );
};



const CookieOption = ({
  title,
  description,
  enabled,
  onClick,
  disabled,
}: {
  title:string;
  description:string;
  enabled:boolean;
  onClick?:()=>void;
  disabled?:boolean;
}) => {

  return (
    <div className="flex items-center justify-between">

      <div>
        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      </div>


      <button
        disabled={disabled}
        onClick={onClick}
        className={`w-10 h-6 rounded-full relative transition ${
          enabled
            ? "bg-primary"
            : "bg-muted-foreground/30"
        } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      >

        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
            enabled
              ? "right-1"
              : "left-1"
          }`}
        />

      </button>

    </div>
  );
};


export default CookieBanner;