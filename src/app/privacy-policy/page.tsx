import React from "react";
import Header from "~/components/Header";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Discover AQ Energy's commitment to safeguarding your personal data. Learn about our privacy policy, data protection measures, and how we ensure secure transactions.",
};

export default function page() {
  return (
    <>
      <Header title="Privacy Policy" />

      <section className="container prose mx-auto px-4 py-14 text-justify prose-h2:text-lg lg:px-8">
        <p>
          The Personal Data Protection Notice (“the Notice”) is issued pursuant
          to the enactment of the Personal Data Protection Act 2010 (“the Act”)
          to regulate the collection and processing of your Personal Data (as
          herein defined) by <strong>Max Bell Sdn. Bhd.</strong>, its
          subsidiaries, associates, jointly controlled entities, affiliates (or
          referred to as “AQ Energy”, “Max Bell”, “we” or “us”) as the data
          controller of this website.
        </p>

        <ol>
          <li>
            <h2>TYPE OF PERSONAL DATA COLLECTED</h2>
            <p>
              It might be required to collect personal data from you during the
              course of your dealings with Max Bell or for the purpose of
              related business activities. Such personal data may include but is
              not limited to name, preferred name, age, identity card number,
              passport number, address, gender, date of birth, marital status,
              information of spouse/children, occupation, profession,
              designation, income range, contact details such as correspondence
              address, telephone or mobile number, fax number, credit card
              details, bank account number, email address, information of
              employer, race, nationality, signature and such other data
              necessary for the purpose which the personal data is collected
              (“Personal Data”).
            </p>
          </li>

          <li>
            <h2>CONSENT BY YOU</h2>
            <p>
              By providing your Personal Data to us, you have read and accepted
              the Notice and you have consented to the processing of the
              Personal Data by us in the manner set out herein. Further, if you
              have provided the Personal Data of third parties to us, you
              warrant and represent to us that you have obtained the required
              consent of the third parties for the processing of the relevant
              Personal Data by Max Bell in the manner set out herein.
            </p>
          </li>

          <li>
            <h2>INFORMATION COLLECTED AND PURPOSE OF COLLECTING</h2>

            <h3>Information we may collect including but not limited to:</h3>
            <ol>
              <li>Name</li>
              <li>National Registration Identity Card</li>
              <li>Gender</li>
              <li>Email Address</li>
              <li>Phone number</li>
              <li>Payment information</li>
            </ol>

            <h3>Purpose of collecting data may include but not limited to:</h3>
            <ol>
              <li>Purchase of our products</li>
              <li>Internal record and marketing</li>
              <li>Legal compliance</li>
              <li>Process payment and delivery</li>
              <li>Customer care and support</li>
            </ol>

            <h3>Cookies:</h3>
            <p>
              When you visit any website, it may store or retrieve information
              on your browser, mostly in the form of cookies. This information
              might be about you, your preferences or your device and is mostly
              used to make the site work as you expect it to.
            </p>

            <h3>Personal data provided by the data subject:</h3>
            <p>
              When using this website&apos;s online facilities, data subjects
              may be required to provide their personal data for the purposes of
              Account Creation and Validation, and Marketing. All data will be
              kept strictly confidential, and the use of the information for any
              specific purpose(s) will require prior consent by data subjects.
            </p>
          </li>

          <li>
            <h2>DISCLOSURE OF PERSONAL DATA</h2>
            <p>
              You hereby consent and authorize Max Bell to provide or disclose
              or share or reveal the Personal Data to the following classes of
              users:-
            </p>

            <ol>
              <li>
                Related subsidiaries or associates or holdings companies,
                including future entities;
              </li>
              <li>
                Government agencies, local authorities, utilities service
                providers, statutory authorities, enforcement agencies under the
                law and industry regulatory or other authorities if required or
                authorized to do so to discharge any regulatory function under
                any law or in relation to any order or judgment of court;
              </li>
              <li>
                Max Bell&apos;s employees, auditors, consultants, accountants,
                lawyers, real estate agents, vendors, co-marketing partner,
                insurance company, property development and management manager
                and professional advisers;
              </li>
              <li>
                Max Bell&apos;s contractors, subcontractors or third parties
                service or product providers as may be determined;
              </li>
              <li>
                Financial institutions for purposes of facilitating payments
                and/or maintaining financial records in connection with the
                business or contract relationship between Max Bell and you
                and/or your company; and
              </li>
              <li>
                Any other third parties Max Bell may deem necessary and
                expedient.
              </li>
            </ol>
          </li>

          <li>
            <h2>YOUR RIGHTS AS THE DATA SUBJECT</h2>
            <p>
              As an individual, you may exercise your right to access the data
              held about you by this company by submitting your request in
              writing to the data controller. Although all reasonable efforts
              will be made to keep your information updated, you are kindly
              requested to inform us of any change referring to the personal
              data held by the association. In any case, if you consider that
              certain information about you is inaccurate, you may request
              rectification of such data. You also have the right to request the
              blocking or erasure of data that has been processed unlawfully.
            </p>
          </li>

          <li>
            <h2>TRANSACTION SECURITY POLICY</h2>
            <p>
              This site uses Secure Sockets Layer (SSL) which encrypts the data
              you send or get through the site to ensure it is private and
              protected. To confirm the secure nature of your connection, you
              may view the site information on the top left corner of the
              browser window which indicates the security status symbol, and the
              URL address will commence with “https://” signifying a secure
              webpage.
            </p>
          </li>

          <li>
            <h2>LINKS TO OTHER WEBSITES</h2>
            <p>
              To give you a better service, our site can connect you with
              several links to other local and international organizations and
              agencies. When connecting to such other websites you will no
              longer be subject to this policy but to the privacy policy of the
              new site.
            </p>
          </li>

          <li>
            <h2>CHANGES TO THIS PRIVACY POLICY</h2>
            <p>
              We shall have the right to modify, update or amend the terms of
              this Policy at any time by placing the updated Policy on this
              website. This privacy notice was last revised on 30th July 2024.{" "}
            </p>
          </li>
        </ol>
      </section>
    </>
  );
}
