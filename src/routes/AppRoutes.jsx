import { Routes, Route } from "react-router-dom";

/* LAYOUTS */

import MainLayout from "../layouts/MainLayout";

/* PAGES */

import Home from "../pages/Home";

import About from "../pages/About";

import Plans from "../pages/Plans";

import Contact from "../pages/Contact";

import Plantations from "../pages/Plantations";

import SustainabilityPage from "../pages/SustainabilityPage";

import InvestorRelations from "../pages/InvestorRelations";

import Gallery from "../pages/Gallery";

import Blog from "../pages/Blog";

import BlogDetails from "../pages/BlogDetails";

import FAQPage from "../pages/FAQPage";

import PrivacyPolicy from "../pages/PrivacyPolicy";

import TermsConditions from "../pages/TermsConditions";

import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* MAIN WEBSITE */}

      <Route path="/" element={<MainLayout />}>
        {/* HOME */}

        <Route
          index
          element={<Home />}
        />

        {/* ABOUT */}

        <Route
          path="about"
          element={<About />}
        />

        {/* PLANTATIONS */}

        <Route
          path="plantations"
          element={<Plantations />}
        />

        {/* SUSTAINABILITY */}

        <Route
          path="sustainability"
          element={
            <SustainabilityPage />
          }
        />

        {/* INVESTOR RELATIONS */}

        <Route
          path="investor-relations"
          element={
            <InvestorRelations />
          }
        />

        {/* INVESTMENT PLANS */}

        <Route
          path="plans"
          element={<Plans />}
        />

        {/* GALLERY */}

        <Route
          path="gallery"
          element={<Gallery />}
        />

        {/* BLOG */}

        <Route
          path="blog"
          element={<Blog />}
        />

        {/* BLOG DETAILS */}

        <Route
          path="blog/:id"
          element={<BlogDetails />}
        />

        {/* FAQ */}

        <Route
          path="faq"
          element={<FAQPage />}
        />

        {/* CONTACT */}

        <Route
          path="contact"
          element={<Contact />}
        />

        {/* PRIVACY POLICY */}

        <Route
          path="privacy-policy"
          element={
            <PrivacyPolicy />
          }
        />

        {/* TERMS */}

        <Route
          path="terms-conditions"
          element={
            <TermsConditions />
          }
        />

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}