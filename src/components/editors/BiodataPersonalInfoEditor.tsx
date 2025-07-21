import type { PersonalInfo } from '../../types/cv';

interface BiodataPersonalInfoEditorProps {
  personalInfo: PersonalInfo;
  onChange: (personalInfo: PersonalInfo) => void;
}

export function BiodataPersonalInfoEditor({ personalInfo, onChange }: BiodataPersonalInfoEditorProps) {
  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...personalInfo, [field]: value });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onChange({ ...personalInfo, profileImage: result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="editor-section">
      <div className="section-intro">
        <h3>Personal Information</h3>
        <p className="section-description">
          Complete biodata information including personal and family details.
        </p>
      </div>

      {/* Basic Information */}
      <div className="biodata-form-group">
        <h4 className="biodata-subsection-title">Basic Details</h4>
        
        <div className="form-row">
          <div className="form-group flex-1">
            <label>Full Name *</label>
            <input
              type="text"
              value={personalInfo.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Your full name"
            />
          </div>
          
          <div className="form-group">
            <label>Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input"
            />
            {personalInfo.profileImage && (
              <div className="image-preview">
                <img src={personalInfo.profileImage} alt="Profile" />
              </div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Birth Date</label>
            <input
              type="text"
              value={personalInfo.birthDate || ''}
              onChange={(e) => handleInputChange('birthDate', e.target.value)}
              placeholder="e.g., 09 November 1994"
            />
          </div>
          
          <div className="form-group">
            <label>Birth Time</label>
            <input
              type="text"
              value={personalInfo.birthTime || ''}
              onChange={(e) => handleInputChange('birthTime', e.target.value)}
              placeholder="e.g., 08:11 AM"
            />
          </div>
          
          <div className="form-group">
            <label>Birth Place</label>
            <input
              type="text"
              value={personalInfo.birthPlace || ''}
              onChange={(e) => handleInputChange('birthPlace', e.target.value)}
              placeholder="e.g., Mumbai"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Religion</label>
            <input
              type="text"
              value={personalInfo.religion || ''}
              onChange={(e) => handleInputChange('religion', e.target.value)}
              placeholder="e.g., Hindu"
            />
          </div>
          
          <div className="form-group">
            <label>Caste</label>
            <input
              type="text"
              value={personalInfo.caste || ''}
              onChange={(e) => handleInputChange('caste', e.target.value)}
              placeholder="e.g., Maratha"
            />
          </div>
          
          <div className="form-group">
            <label>Sub Caste</label>
            <input
              type="text"
              value={personalInfo.subCaste || ''}
              onChange={(e) => handleInputChange('subCaste', e.target.value)}
              placeholder="e.g., 96K Maratha"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Gotra</label>
            <input
              type="text"
              value={personalInfo.gotra || ''}
              onChange={(e) => handleInputChange('gotra', e.target.value)}
              placeholder="e.g., Bharadwaj"
            />
          </div>
          
          <div className="form-group">
            <label>Height</label>
            <input
              type="text"
              value={personalInfo.height || ''}
              onChange={(e) => handleInputChange('height', e.target.value)}
              placeholder="e.g., 5 ft. 2 in."
            />
          </div>
          
          <div className="form-group">
            <label>Weight</label>
            <input
              type="text"
              value={personalInfo.weight || ''}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              placeholder="e.g., 55 kg"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Blood Group</label>
            <input
              type="text"
              value={personalInfo.bloodGroup || ''}
              onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
              placeholder="e.g., AB+"
            />
          </div>
          
          <div className="form-group">
            <label>Complexion</label>
            <input
              type="text"
              value={personalInfo.complexion || ''}
              onChange={(e) => handleInputChange('complexion', e.target.value)}
              placeholder="e.g., Light Neutral"
            />
          </div>
          
          <div className="form-group">
            <label>Physical Disability</label>
            <input
              type="text"
              value={personalInfo.physicalDisability || ''}
              onChange={(e) => handleInputChange('physicalDisability', e.target.value)}
              placeholder="e.g., None"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Marital Status</label>
            <select
              value={personalInfo.maritalStatus || ''}
              onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
            >
              <option value="">Select Marital Status</option>
              <option value="Never Married">Never Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
              <option value="Awaiting Divorce">Awaiting Divorce</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Manglik</label>
            <select
              value={personalInfo.manglik || ''}
              onChange={(e) => handleInputChange('manglik', e.target.value)}
            >
              <option value="">Select Manglik Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Anshik">Anshik</option>
              <option value="Don't Know">Don't Know</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Horoscope</label>
            <select
              value={personalInfo.horoscope || ''}
              onChange={(e) => handleInputChange('horoscope', e.target.value)}
            >
              <option value="">Horoscope Match</option>
              <option value="Must">Must</option>
              <option value="Preferred">Preferred</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>

      {/* Professional Information */}
      <div className="biodata-form-group">
        <h4 className="biodata-subsection-title">Professional Details</h4>
        
        <div className="form-row">
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              value={personalInfo.jobTitle || ''}
              onChange={(e) => handleInputChange('jobTitle', e.target.value)}
              placeholder="e.g., Software Engineer"
            />
          </div>
          
          <div className="form-group">
            <label>Work Place</label>
            <input
              type="text"
              value={personalInfo.workPlace || ''}
              onChange={(e) => handleInputChange('workPlace', e.target.value)}
              placeholder="e.g., TCS, Infosys"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Work Location</label>
            <input
              type="text"
              value={personalInfo.workLocation || ''}
              onChange={(e) => handleInputChange('workLocation', e.target.value)}
              placeholder="e.g., Pune, Mumbai"
            />
          </div>
          
          <div className="form-group">
            <label>Occupation</label>
            <input
              type="text"
              value={personalInfo.occupation || ''}
              onChange={(e) => handleInputChange('occupation', e.target.value)}
              placeholder="e.g., Job - Ajantha Industries, Mumbai"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Annual Income</label>
            <input
              type="text"
              value={personalInfo.annualIncome || ''}
              onChange={(e) => handleInputChange('annualIncome', e.target.value)}
              placeholder="e.g., 8-10 Lakhs"
            />
          </div>
        </div>
      </div>

      {/* Lifestyle Information */}
      <div className="biodata-form-group">
        <h4 className="biodata-subsection-title">Lifestyle Details</h4>
        
        <div className="form-row">
          <div className="form-group">
            <label>Diet</label>
            <select
              value={personalInfo.diet || ''}
              onChange={(e) => handleInputChange('diet', e.target.value)}
            >
              <option value="">Select Diet</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Eggetarian">Eggetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Occasionally Non-Vegetarian">Occasionally Non-Vegetarian</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Drinking</label>
            <select
              value={personalInfo.drinking || ''}
              onChange={(e) => handleInputChange('drinking', e.target.value)}
            >
              <option value="">Select Drinking Habit</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
              <option value="Occasionally">Occasionally</option>
              <option value="Socially">Socially</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Smoking</label>
            <select
              value={personalInfo.smoking || ''}
              onChange={(e) => handleInputChange('smoking', e.target.value)}
            >
              <option value="">Select Smoking Habit</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
              <option value="Occasionally">Occasionally</option>
            </select>
          </div>
        </div>
      </div>

      {/* Family Information */}
      <div className="biodata-form-group">
        <h4 className="biodata-subsection-title">Family Information</h4>
        
        <div className="form-row">
          <div className="form-group">
            <label>Family Type</label>
            <select
              value={personalInfo.familyType || ''}
              onChange={(e) => handleInputChange('familyType', e.target.value)}
            >
              <option value="">Select Family Type</option>
              <option value="Joint Family">Joint Family</option>
              <option value="Nuclear Family">Nuclear Family</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Family Status</label>
            <select
              value={personalInfo.familyStatus || ''}
              onChange={(e) => handleInputChange('familyStatus', e.target.value)}
            >
              <option value="">Select Family Status</option>
              <option value="Middle Class">Middle Class</option>
              <option value="Upper Middle Class">Upper Middle Class</option>
              <option value="Rich">Rich</option>
              <option value="Affluent">Affluent</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Family Values</label>
            <select
              value={personalInfo.familyValues || ''}
              onChange={(e) => handleInputChange('familyValues', e.target.value)}
            >
              <option value="">Select Family Values</option>
              <option value="Orthodox">Orthodox</option>
              <option value="Traditional">Traditional</option>
              <option value="Moderate">Moderate</option>
              <option value="Liberal">Liberal</option>
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group flex-1">
            <label>Father's Name</label>
            <input
              type="text"
              value={personalInfo.fatherName || ''}
              onChange={(e) => handleInputChange('fatherName', e.target.value)}
              placeholder="Father's full name"
            />
          </div>
          
          <div className="form-group flex-1">
            <label>Father's Occupation</label>
            <input
              type="text"
              value={personalInfo.fatherOccupation || ''}
              onChange={(e) => handleInputChange('fatherOccupation', e.target.value)}
              placeholder="e.g., Business - Narito Electronics"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group flex-1">
            <label>Mother's Name</label>
            <input
              type="text"
              value={personalInfo.motherName || ''}
              onChange={(e) => handleInputChange('motherName', e.target.value)}
              placeholder="Mother's full name"
            />
          </div>
          
          <div className="form-group flex-1">
            <label>Mother's Occupation</label>
            <input
              type="text"
              value={personalInfo.motherOccupation || ''}
              onChange={(e) => handleInputChange('motherOccupation', e.target.value)}
              placeholder="e.g., Home Maker / Teacher"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Brothers</label>
            <input
              type="text"
              value={personalInfo.brothers || ''}
              onChange={(e) => handleInputChange('brothers', e.target.value)}
              placeholder="e.g., 1/0 Married"
            />
          </div>
          
          <div className="form-group">
            <label>Sisters</label>
            <input
              type="text"
              value={personalInfo.sisters || ''}
              onChange={(e) => handleInputChange('sisters', e.target.value)}
              placeholder="e.g., 1/0 Married"
            />
          </div>
          
          <div className="form-group">
            <label>Total Siblings</label>
            <input
              type="text"
              value={personalInfo.siblings || ''}
              onChange={(e) => handleInputChange('siblings', e.target.value)}
              placeholder="e.g., 2 (1 Brother, 1 Sister)"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="biodata-form-group">
        <h4 className="biodata-subsection-title">Contact Information</h4>
        
        <div className="form-row">
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              value={personalInfo.contactNo || personalInfo.phone}
              onChange={(e) => {
                handleInputChange('contactNo', e.target.value);
                handleInputChange('phone', e.target.value);
              }}
              placeholder="e.g., 9716548527"
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={personalInfo.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Current Address</label>
          <textarea
            value={personalInfo.address || personalInfo.location}
            onChange={(e) => {
              handleInputChange('address', e.target.value);
              handleInputChange('location', e.target.value);
            }}
            placeholder="Complete current address with flat no, building, area, city"
            rows={3}
          />
        </div>

        <div className="form-group">
          <label>Native Place</label>
          <input
            type="text"
            value={personalInfo.nativePlace || ''}
            onChange={(e) => handleInputChange('nativePlace', e.target.value)}
            placeholder="e.g., Village/Town, District, State"
          />
        </div>
      </div>
    </div>
  );
}
