import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import { fees1, fees2 } from './FeesConfig'
import FeesTable from './FeesTable'
import './FeesPage.css'

const feesPage = () => {
  return (
    <PageWrapper title='Fees'>
      <div className='fees-grid-large-screen'>
        <FeesTable tableContent={fees1} />
        <FeesTable tableContent={fees2} />
      </div>

      <div className='fees-grid-small-screen'>
        <FeesTable tableContent={[...fees1, ...fees2]} />
      </div>

      <div className='fees-text'>
        <div className='fees-subheading'>Payment Options</div>
        <div className='fees-info'>
          <b>Cash: </b> 
          Please place correct amount of cash in a sealed and labelled envelope clearly marked with child’s name and amount enclosed.
          <br/><br/>
          <b>Direct Deibt: </b>
          Fees can be deposited into our account with Student Name in the Reference. Banking details can be found on your Invoice. 
          <br/><br/>
	        <b>Active Kids and Creative Kids Vouchers:</b> We are a Registered Activity Provider and accept both the Active Kids and 
          Creative Kids Vouchers which will give you a total of <b>3 x $100 vouchers</b> to go towards your Dance Fees. 
          You can register for your vouchers online at <a href='https://www.service.nsw.gov.au/' target='__blank'>service.nsw.gov.au</a> - 
          once this is complete they will email your Voucher through. 
          Please forward this on via email to Miss Chelsea along with the <i>Student's Full Name</i> and <i>Date of Birth.</i> 
          We need all three pieces of information to process the voucher.
          <br /><br />
          <b>Term Invoices</b> will be distributed in Week 1 each Term &amp; are due by Week 5 (late fees of $10/week will apply). 
          All missed lessons must be paid for. 
          <br />
          The Registration Fee is a one-off annual fee of $60 which also includes a brand new studio top and covers studio administration costs. 
          <br />
          The Eisteddfod Fee is for those students in our Troupe class which covers all Eisteddfod Entry Fees and includes a personalised studio jacket.
        </div>

        <div className='fees-subheading'>Registration</div>
        <div className='fees-info'>
          To register please email <a href='mailto:chelsea@ccchoreography.org?subject=Registration&body=Student Name:%0D%0A%0D%0AParent/Guardian Name:%0D%0A%0D%0AContact Number:%0D%0A%0D%0AClasses:%0D%0A%0D%0A'>chelsea@ccchoreography.org</a> with 
          <i> Student Name, Parent/Guardian Name, Contact Number &amp; Classes</i> they'd like to join.
          <br />
          We welcome everyone to our classes, no dance experience is required and we are a very family-oriented, caring &amp; happy dance studio!
        </div>
      </div>

    </PageWrapper>
  )
}

export default feesPage