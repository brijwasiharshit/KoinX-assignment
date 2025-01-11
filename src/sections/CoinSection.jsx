import React from 'react'
import PageHolder from '../components/PageHolder';
import Crypto from '../components/Crypto';
import ToggleSection from '../components/ToggleSection';
import PerformanceSection from '../components/PerformanceSection';
import SentimentSection from '../components/SentimentSection';
import TokenInsights from '../components/TokenInsights';
import TeamCard from '../components/TeamCard';
import CradsPromo from '../components/CradsPromo';
import TrendingCoins from '../components/TrendingCoins';
import SuggestionSection from '../components/SuggestionSection';
import About from '../components/About';

const CoinSection = () => {
  return (
    <div>
        <div className="h-full w-screen bg-slate-200/40">
      <PageHolder/>

      <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
            <Crypto/>
             <ToggleSection/>
             <PerformanceSection/>
             <SentimentSection/>
             <About/>
             <TokenInsights/>
             <TeamCard/>
        </div>
        <div className="lg:w-4/12 lg:mr-14 mx-4">
          <CradsPromo/>
          <TrendingCoins/>
        </div>
        
      </div>
        <SuggestionSection/>
    </div>
    </div>
  )
}

export default CoinSection;