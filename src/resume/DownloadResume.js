import React from 'react';
import SearchPageShell from '../components/SearchPageShell';
import ResumeDownloadCard from './ResumeDownloadCard';

const DownloadResume = () => (
  <SearchPageShell
    query="nikita solanki resume download"
    className="resume-page"
    left={<ResumeDownloadCard />}
  />
);

export default DownloadResume;
