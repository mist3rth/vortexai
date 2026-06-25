import { useState, useEffect, useRef } from "react";

// Existing Components
import HullShowcase from "./components/HullShowcase";
import PersonalityMatrix, { PersonalitySliders } from "./components/PersonalityMatrix";
import SynapseHub from "./components/SynapseHub";
import { FAQSection } from "./components/FAQSection";
import { ManifestoSection } from "./components/ManifestoSection";
import { RadiusOnScrollSection } from "./components/RadiusOnScrollSection";
import ColorSweepSection from "./components/ColorSweepSection";
import FooterSection from "./components/FooterSection";

// Extracted UI & Layout Components
import { AmbientBackground } from "./components/ui/AmbientBackground";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { PricingSection } from "./components/sections/PricingSection";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// Extracted Modals & Drawers
import { SignInModal } from "./components/modals/SignInModal";
import { GetStartedWizard } from "./components/modals/GetStartedWizard";
import { PrivateExchangeDrawer } from "./components/modals/PrivateExchangeDrawer";
import { MobileMenuDrawer } from "./components/modals/MobileMenuDrawer";
import { PrivacyView } from "./components/sections/PrivacyView";
import { SomaticLawsView } from "./components/sections/SomaticLawsView";

// Types for customizable settings
export interface DesignSettings {
  bgType: "ambient" | "custom_url" | "custom_upload" | "solid";
  customBgUrl: string;
  customBgUpload: string | null;
  overlayOpacity: number; // 0 to 1
  blurStrength: number; // 0 to 24px
  redGlowStrength: number; // 0 to 1
  blueGlowStrength: number; // 0 to 1
  showReferenceOverlay: boolean;
  referenceOpacity: number;
}

export default function App() {
  // --- STATES & REFS ---
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isConnectingOpen, setIsConnectingOpen] = useState(false);
  const [activeView, setActiveView] = useState<"home" | "privacy" | "somatic-laws">("home");
  const [isDesktop, setIsDesktop] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Configurable backdrops settings state (persistent using localStorage)
  const [settings, setSettings] = useState<DesignSettings>(() => {
    const saved = localStorage.getItem("apex_hero_settings");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // use default
      }
    }
    return {
      bgType: "ambient",
      customBgUrl: "",
      customBgUpload: null,
      overlayOpacity: 0.35,
      blurStrength: 0,
      redGlowStrength: 0.8,
      blueGlowStrength: 0.5,
      showReferenceOverlay: false,
      referenceOpacity: 0.3
    };
  });

  // Shared customized bionic states for sections cohesion
  const [somaticSliders, setSomaticSliders] = useState<PersonalitySliders>({
    empathy: 15,
    analytical: 95,
    wit: 90,
    authority: 50
  });
  const [activeHullName, setActiveHullName] = useState("VORTEX V-1 \"Aegis\"");
  const [activeHullAccent, setActiveHullAccent] = useState("#22d3ee");

  // --- EFFECTS ---

  // Save settings on changes
  useEffect(() => {
    localStorage.setItem("apex_hero_settings", JSON.stringify(settings));
  }, [settings]);

  // Scroll to top on activeView changes
  useEffect(() => {
    window.scrollTo(0, 0);
    const rootEl = document.getElementById("root");
    if (rootEl) {
      rootEl.scrollTop = 0;
      rootEl.scrollTo?.(0, 0);
    }
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
      containerRef.current.scrollTo?.(0, 0);
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [activeView]);

  // Parallax Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY || containerRef.current?.scrollTop || 0;
      setScrollY(pos);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    const el = containerRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (el) {
        el.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Screen size tracking for responsive animations (desktop has 3 columns, mobile has 1)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (id: string) => {
    if (activeView !== "home") {
      setActiveView("home");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 350);
    } else {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Wait for mobile drawer close animation to finish
    }
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-screen font-sans flex flex-col select-none bg-[#050508] scroll-smooth overflow-x-clip">
      
      {/* AMBIENT BACKGROUND */}
      <AmbientBackground
        bgType={settings.bgType}
        customBgUrl={settings.customBgUrl}
        customBgUpload={settings.customBgUpload}
        overlayOpacity={settings.overlayOpacity}
        blurStrength={settings.blurStrength}
        redGlowStrength={settings.redGlowStrength}
        blueGlowStrength={settings.blueGlowStrength}
        showReferenceOverlay={settings.showReferenceOverlay}
        referenceOpacity={settings.referenceOpacity}
        scrollY={scrollY}
      />

      {/* HEADER / NAVIGATION */}
      <Header
        scrollY={scrollY}
        isSignedIn={isSignedIn}
        userEmail={userEmail}
        setIsSignModalOpen={setIsSignModalOpen}
        setIsMenuOpen={setIsMenuOpen}
        onNavigate={handleNavigate}
        onGoHome={() => {
          setActiveView("home");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {activeView === "home" ? (
        <>
          {/* HERO SECTION */}
          <HeroSection
            scrollY={scrollY}
            setIsGetStartedOpen={setIsGetStartedOpen}
            setIsConnectingOpen={setIsConnectingOpen}
          />

          {/* DYNAMIC SCROLLING SECTIONS */}
          <div className="relative z-20 w-full bg-[#030305] border-t border-white/5 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
            
            {/* Giant Manifesto / Vision Block */}
            <ErrorBoundary>
              <ManifestoSection />
            </ErrorBoundary>

            {/* Dynamic white background section */}
            <ErrorBoundary>
              <RadiusOnScrollSection />
            </ErrorBoundary>

            {/* Color Sweep Section */}
            <ErrorBoundary>
              <ColorSweepSection />
            </ErrorBoundary>

            {/* Phase 01: Humanoid Vessels Showcase Slider */}
            <ErrorBoundary>
              <HullShowcase 
                onSelectHull={(name, accent) => {
                  setActiveHullName(name);
                  setActiveHullAccent(accent);
                }}
              />
            </ErrorBoundary>

            {/* Phase 02: Cognitive Sync Matrix */}
            <ErrorBoundary>
              <PersonalityMatrix 
                onUpdateSliders={(s) => setSomaticSliders(s)}
              />
            </ErrorBoundary>

            {/* Phase 03: AI Model Synapse Bridge */}
            <ErrorBoundary>
              <SynapseHub 
                selectedHullName={activeHullName}
                selectedHullAccent={activeHullAccent}
              />
            </ErrorBoundary>

            {/* Section 4: Les Cercles d'Accès (Grille Tarifaire) */}
            <ErrorBoundary>
              <PricingSection
                isDesktop={isDesktop}
                setIsGetStartedOpen={setIsGetStartedOpen}
                setIsConnectingOpen={setIsConnectingOpen}
              />
            </ErrorBoundary>

            {/* FAQ Section */}
            <ErrorBoundary>
              <FAQSection />
            </ErrorBoundary>

            {/* GLOBAL PREMIUM FOOTER SYSTEM */}
            <ErrorBoundary>
              <FooterSection 
                onOpenPrivacy={() => setActiveView("privacy")}
                onOpenSomaticLaws={() => setActiveView("somatic-laws")}
                onNavigate={handleNavigate}
              />
            </ErrorBoundary>

          </div>
        </>
      ) : activeView === "privacy" ? (
        <div className="relative z-20 w-full bg-[#030305] border-t border-white/5">
          <ErrorBoundary>
            <PrivacyView onBack={() => setActiveView("home")} />
          </ErrorBoundary>
          <ErrorBoundary>
            <FooterSection 
              onOpenPrivacy={() => setActiveView("privacy")}
              onOpenSomaticLaws={() => setActiveView("somatic-laws")}
              onNavigate={handleNavigate}
            />
          </ErrorBoundary>
        </div>
      ) : (
        <div className="relative z-20 w-full bg-[#030305] border-t border-white/5">
          <ErrorBoundary>
            <SomaticLawsView onBack={() => setActiveView("home")} />
          </ErrorBoundary>
          <ErrorBoundary>
            <FooterSection 
              onOpenPrivacy={() => setActiveView("privacy")}
              onOpenSomaticLaws={() => setActiveView("somatic-laws")}
              onNavigate={handleNavigate}
            />
          </ErrorBoundary>
        </div>
      )}

      {/* MODALS & DRAWERS */}
      
      {/* Mobile navigation menu */}
      <MobileMenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Security Sign In Modal */}
      <SignInModal
        isOpen={isSignModalOpen}
        onClose={() => setIsSignModalOpen(false)}
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
      />

      {/* Get started cognitive setup wizard */}
      <GetStartedWizard
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />

      {/* Private Chat Drawer */}
      <PrivateExchangeDrawer
        isOpen={isConnectingOpen}
        onClose={() => setIsConnectingOpen(false)}
      />




      {/* Sticky bottom blur corridor for smooth scroll effect */}
      <div 
        id="sticky-bottom-blur-corridor"
        className="fixed bottom-0 left-0 right-0 h-[80px] pointer-events-none z-45 bg-transparent backdrop-blur-[28px]"
        style={{
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      />

    </div>
  );
}
