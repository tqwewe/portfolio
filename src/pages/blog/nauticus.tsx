import React from 'react'
import '../../styles/styles.css'

import NauticusBlurred from '../../images/projects/nauticus-blurred.jpg'
import NauticusKYC from '../../images/projects/nauticus/kyc.png'
import NauticusOrderBook from '../../images/projects/nauticus/orderbook.png'

import BlogPage from '../../components/BlogPage'

export default () => {
  return (
    <BlogPage
      backgroundColor="blue-nauticus"
      backgroundImage={NauticusBlurred}
      title="Nauticus"
      subtitle="A global crypto-currency exchange app built with a team across the world using a huge variety of technologies."
    >
      <p className="mb-4">
        After only a month of working at Sky Foundry and working on small issues
        on existing websites, my boss and lead developer decided it was time to
        bring me onto the new project they were working on which was being
        developed in VueJS.
      </p>
      <p className="mb-4">
        The first week I was focusing on understanding the concepts of Vue as I
        hadn’t heard of it prior to working at Sky Foundry. I managed to
        understand most of the concepts and start implementing the KYC process
        (know your customer) of Nauticus which is used to ensure users of
        Nauticus are legitimate and may use it based on their country.
      </p>
      <p className="mb-4">
        I was given a design by our designer with a diagram showing the flow of
        the process.
      </p>
      <img className="mb-4" src={NauticusKYC} alt="KYC Process" />
      <p className="mb-4">
        After working on the KYC process for a few weeks, I then moved onto
        working on the main exchange dashboard. This is when I was working more
        along side my lead developer implementing new features to the dashboard
        and setting up the purchasing logic.
      </p>
      <p className="mb-4">
        One noteworthy feature for Nauticus was the market depth graph and order
        book which were developed using the JavaScript canvas API for
        performance reasons.
      </p>
      <img
        className="mb-4"
        src={NauticusOrderBook}
        alt="Order book and market depth"
      />
      <p className="mb-4">
        These sections of the site were required to update multiple times per
        second with some calculations which had to be moved into a service
        worker.
      </p>
      <p className="mb-4">
        Over the time working on Nauticus, I discovered how incapable JavaScript
        is when it comes to complex mathematics with precision errors.
        Thankfully the next version of ES is bringing in BigInt which would’ve
        solved many issues in the past.
      </p>
      <p className="mb-4">
        As time went on with the project, I was more active on the Slack server
        talking to the team in Melbourne. I was taking a more serious part in
        the project and started development on some backend services including
        the authentication and KYC interaction with the databases on the Google
        Cloud Platform.
      </p>
      <p className="mb-4">
        The project took our team 9 months with public deploys happening weekly.
        I was required to ensure every commit I made to the project didn’t break
        a thing and as the project grew, this became more and more difficult to
        manage.
        <br />
        I’m very thankful to have taken a major part in such a huge project and
        learnt more about full stack web development than any other project
        before.
      </p>
    </BlogPage>
  )
}
