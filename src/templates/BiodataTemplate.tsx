import type { CVData, CVTheme } from "../types/cv";

interface TemplateProps {
  cvData: CVData;
  theme: CVTheme;
}

export function BiodataTemplate({ cvData, theme }: TemplateProps) {
  const { personalInfo, education } = cvData;

  return (
    <div
      className="cv-preview biodata-template"
      style={
        {
          fontFamily: theme.fontFamily,
          fontSize: `${theme.fontSize}px`,
          "--primary-color": theme.primaryColor,
          "--secondary-color": theme.secondaryColor,
          "--accent-color": theme.accentColor,
        } as React.CSSProperties
      }
    >
      <div className="biodata-wrapper">
        {/* Header */}
        <div className="biodata-main-header">
          <div className="biodata-crown">�</div>
          <h1 className="biodata-main-title">BIODATA</h1>
        </div>

        {/* Content Layout */}
        <div className="biodata-layout">
          {/* Left Content */}
          <div className="biodata-left">
            {/* Personal Details Section */}
            <div className="biodata-section-wrapper">
              <h2 className="biodata-section-header">PERSONAL DETAILS</h2>
              <div className="biodata-section-content">
                <div className="biodata-info-table">
                  <div className="biodata-row">
                    <span className="biodata-field-label">Name</span>
                    <span className="biodata-field-value">
                      {personalInfo.fullName}
                    </span>
                  </div>

                  {personalInfo.birthDate && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Date of Birth</span>
                      <span className="biodata-field-value">
                        {personalInfo.birthDate}
                      </span>
                    </div>
                  )}

                  {personalInfo.birthPlace && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">
                        Place of Birth
                      </span>
                      <span className="biodata-field-value">
                        {personalInfo.birthPlace}
                      </span>
                    </div>
                  )}

                  {personalInfo.birthTime && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Time of Birth</span>
                      <span className="biodata-field-value">
                        {personalInfo.birthTime}
                      </span>
                    </div>
                  )}

                  {personalInfo.religion && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Religion</span>
                      <span className="biodata-field-value">
                        {personalInfo.religion}
                      </span>
                    </div>
                  )}

                  {personalInfo.caste && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Caste</span>
                      <span className="biodata-field-value">
                        {personalInfo.caste}
                      </span>
                    </div>
                  )}

                  {personalInfo.subCaste && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Sub Caste</span>
                      <span className="biodata-field-value">
                        {personalInfo.subCaste}
                      </span>
                    </div>
                  )}

                  {personalInfo.gotra && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Gotra</span>
                      <span className="biodata-field-value">
                        {personalInfo.gotra}
                      </span>
                    </div>
                  )}

                  {personalInfo.height && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Height</span>
                      <span className="biodata-field-value">
                        {personalInfo.height}
                      </span>
                    </div>
                  )}

                  {personalInfo.weight && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Weight</span>
                      <span className="biodata-field-value">
                        {personalInfo.weight}
                      </span>
                    </div>
                  )}

                  {personalInfo.complexion && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Complexion</span>
                      <span className="biodata-field-value">
                        {personalInfo.complexion}
                      </span>
                    </div>
                  )}

                  {personalInfo.bloodGroup && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Blood Group</span>
                      <span className="biodata-field-value">
                        {personalInfo.bloodGroup}
                      </span>
                    </div>
                  )}

                  {personalInfo.physicalDisability && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Physical Disability</span>
                      <span className="biodata-field-value">
                        {personalInfo.physicalDisability}
                      </span>
                    </div>
                  )}

                  {personalInfo.maritalStatus && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Marital Status</span>
                      <span className="biodata-field-value">
                        {personalInfo.maritalStatus}
                      </span>
                    </div>
                  )}

                  {personalInfo.manglik && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Manglik</span>
                      <span className="biodata-field-value">
                        {personalInfo.manglik}
                      </span>
                    </div>
                  )}

                  {personalInfo.horoscope && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Horoscope</span>
                      <span className="biodata-field-value">
                        {personalInfo.horoscope}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Details Section */}
            <div className="biodata-section-wrapper">
              <h2 className="biodata-section-header">PROFESSIONAL DETAILS</h2>
              <div className="biodata-section-content">
                <div className="biodata-info-table">
                  {education.length > 0 && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Education</span>
                      <span className="biodata-field-value">
                        {education[0].degree}
                        {education[0].field && ` in ${education[0].field}`}
                      </span>
                    </div>
                  )}

                  {personalInfo.jobTitle && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Job Title</span>
                      <span className="biodata-field-value">
                        {personalInfo.jobTitle}
                      </span>
                    </div>
                  )}

                  {personalInfo.workPlace && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Work Place</span>
                      <span className="biodata-field-value">
                        {personalInfo.workPlace}
                      </span>
                    </div>
                  )}

                  {personalInfo.workLocation && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Work Location</span>
                      <span className="biodata-field-value">
                        {personalInfo.workLocation}
                      </span>
                    </div>
                  )}

                  {personalInfo.occupation && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Occupation</span>
                      <span className="biodata-field-value">
                        {personalInfo.occupation}
                      </span>
                    </div>
                  )}

                  {personalInfo.annualIncome && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Annual Income</span>
                      <span className="biodata-field-value">
                        {personalInfo.annualIncome}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Lifestyle Details Section */}
            <div className="biodata-section-wrapper">
              <h2 className="biodata-section-header">LIFESTYLE DETAILS</h2>
              <div className="biodata-section-content">
                <div className="biodata-info-table">
                  {personalInfo.diet && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Diet</span>
                      <span className="biodata-field-value">
                        {personalInfo.diet}
                      </span>
                    </div>
                  )}

                  {personalInfo.drinking && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Drinking</span>
                      <span className="biodata-field-value">
                        {personalInfo.drinking}
                      </span>
                    </div>
                  )}

                  {personalInfo.smoking && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Smoking</span>
                      <span className="biodata-field-value">
                        {personalInfo.smoking}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Family Details Section */}
            <div className="biodata-section-wrapper">
              <h2 className="biodata-section-header">FAMILY DETAILS</h2>
              <div className="biodata-section-content">
                <div className="biodata-info-table">
                  {personalInfo.familyType && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Family Type</span>
                      <span className="biodata-field-value">
                        {personalInfo.familyType}
                      </span>
                    </div>
                  )}

                  {personalInfo.familyStatus && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Family Status</span>
                      <span className="biodata-field-value">
                        {personalInfo.familyStatus}
                      </span>
                    </div>
                  )}

                  {personalInfo.familyValues && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Family Values</span>
                      <span className="biodata-field-value">
                        {personalInfo.familyValues}
                      </span>
                    </div>
                  )}

                  {personalInfo.fatherName && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Father's Name</span>
                      <span className="biodata-field-value">
                        {personalInfo.fatherName}
                      </span>
                    </div>
                  )}

                  {personalInfo.fatherOccupation && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">
                        Father's Occupation
                      </span>
                      <span className="biodata-field-value">
                        {personalInfo.fatherOccupation}
                      </span>
                    </div>
                  )}

                  {personalInfo.motherName && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Mother's Name</span>
                      <span className="biodata-field-value">
                        {personalInfo.motherName}
                      </span>
                    </div>
                  )}

                  {personalInfo.motherOccupation ? (
                    <div className="biodata-row">
                      <span className="biodata-field-label">
                        Mother's Occupation
                      </span>
                      <span className="biodata-field-value">
                        {personalInfo.motherOccupation}
                      </span>
                    </div>
                  ) : (
                    <div className="biodata-row">
                      <span className="biodata-field-label">
                        Mother's Occupation
                      </span>
                      <span className="biodata-field-value">Home Maker</span>
                    </div>
                  )}

                  {personalInfo.brothers && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Brothers</span>
                      <span className="biodata-field-value">
                        {personalInfo.brothers}
                      </span>
                    </div>
                  )}

                  {personalInfo.sisters && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Sisters</span>
                      <span className="biodata-field-value">
                        {personalInfo.sisters}
                      </span>
                    </div>
                  )}

                  {personalInfo.siblings && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Siblings</span>
                      <span className="biodata-field-value">
                        {personalInfo.siblings}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="biodata-section-wrapper">
              <h2 className="biodata-section-header">CONTACT DETAILS</h2>
              <div className="biodata-section-content">
                <div className="biodata-info-table">
                  {(personalInfo.contactNo || personalInfo.phone) && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">
                        Contact Number
                      </span>
                      <span className="biodata-field-value">
                        {personalInfo.contactNo || personalInfo.phone}
                      </span>
                    </div>
                  )}

                  {personalInfo.email && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Email ID</span>
                      <span className="biodata-field-value">
                        {personalInfo.email}
                      </span>
                    </div>
                  )}

                  {(personalInfo.address || personalInfo.location) && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Current Address</span>
                      <span className="biodata-field-value">
                        {personalInfo.address || personalInfo.location}
                      </span>
                    </div>
                  )}

                  {personalInfo.nativePlace && (
                    <div className="biodata-row">
                      <span className="biodata-field-label">Native Place</span>
                      <span className="biodata-field-value">
                        {personalInfo.nativePlace}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="biodata-right">
            <div className="biodata-photo-container">
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt="Profile"
                  className="biodata-photo"
                />
              ) : (
                <div className="biodata-photo-placeholder">
                  <span>Photo</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
