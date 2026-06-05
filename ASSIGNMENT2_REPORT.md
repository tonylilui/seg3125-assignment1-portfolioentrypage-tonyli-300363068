# SEG3125 Assignment 2: UCD for Service Business Site

## High-Fidelity Prototype Report

**Designer:** Tony Li  
**Student Number:** 300363068  
**Date:** June 5, 2026  
**Course:** SEG3125 - User Interface Analysis and Design  
**Submission:** Assignment 2

---

## 1. DESIGNER INFORMATION

- **Name:** Tony Li
- **Student Number:** 300363068
- **Institution:** University of Ottawa
- **Course:** SEG3125 - Analysis and Design of User Interfaces

---

## 2. SERVICE BUSINESS SELECTED

### PawCare Veterinary Clinic

**Service Type:** Veterinary Healthcare Services (Appointment-Based)

**Business Description:**
PawCare Veterinary Clinic is a professional veterinary practice that provides comprehensive healthcare services for pets. The clinic offers services including:

- Regular health checkups and examinations
- Vaccination and immunization programs
- Professional grooming services
- Dental care and oral health
- General consultation and health education

**Business Location:** 123 Pet Street, Ottawa, ON K1A 0B1  
**Contact:** (613) 555-0123 | info@pawcare.com

**Why This Service:**
A veterinary clinic was selected because it:

1. Clearly addresses service business needs (appointment booking)
2. Has universal appeal (most people have or know someone with pets)
3. Allows for diverse user personas with different needs
4. Requires multiple interaction types (information browsing, service selection, appointment booking)

---

## 3. PERSONAS & STORYBOARDS

### PERSONA 1: Sarah Chen

**Demographics:**

- Age: 32
- Occupation: Marketing Manager
- Location: Ottawa, Ontario

**Intrinsic Characteristics:**

1. **Time-conscious and organized** - Manages multiple projects with competing priorities
2. **Tech-savvy and digitally native** - Comfortable with mobile apps and online services
3. **Pet-devoted** - Considers her Golden Retriever "Max" as a family member

**Relationship to Technology:**

- High comfort level with digital tools and online services
- Prefers mobile-first and efficient solutions
- Values convenience and minimal steps to complete tasks
- Quick decision-maker who uses technology to save time

**Relationship to Domain:**

- Experienced pet owner with 10+ years of pet care experience
- Proactive about preventive pet healthcare
- Budget-conscious but willing to pay for quality service
- Familiar with veterinary terminology and procedures

**Goal:**
Book a veterinary appointment for Max's annual checkup within the week using online tools, view available appointment slots, and understand service options without needing to make a phone call.

---

### PERSONA 2: Marcus Johnson

**Demographics:**

- Age: 58
- Occupation: Retired Teacher
- Location: Ottawa, Ontario

**Intrinsic Characteristics:**

1. **Cautious and detail-oriented** - Wants comprehensive information before making decisions
2. **Traditional but tech-learning** - Prefers phone calls but is developing online service skills
3. **Pet care enthusiast** - Recently adopted two rescue cats and committed to quality care

**Relationship to Technology:**

- Moderate comfort level with technology (email, web browsing)
- Prefers clear instructions and step-by-step guidance
- Slower decision-making process requiring thorough information
- Values trust and transparency in digital interactions

**Relationship to Domain:**

- New pet owner with limited veterinary knowledge
- Research-focused approach to learning about pet care
- Price-conscious and wants to understand value
- Prefers educational content about services and procedures

**Goal:**
Learn about PawCare's veterinary services, understand pricing and service descriptions, determine if the clinic is suitable for newly adopted cats, and feel confident before making an appointment.

---

### STORYBOARD 1: Sarah Chen's Journey

_"Quick Booking Flow - Modern Blue Design"_

**Visual Design Theme:**

- Primary Color: Blue (#2563eb)
- Secondary Color: Light Gray (#f1f5f9)
- Style: Clean, modern, minimalist
- Typography: Sans-serif, large and readable
- Layout: Uncluttered, focused on main actions

**Storyboard Sequence (3 Mockups):**

#### Mockup 1: Home Page - Quick Entry Point

**Key Elements:**

- Hero section with clear value proposition
- Prominent "Book Appointment" call-to-action button (primary focus)
- Brief service overview with icons and prices
- Contact information visible in header/footer
- Clean navigation without too many options

**User Action:** Sarah lands on the page, immediately sees booking option

**Design Principles Applied:**

- Visual hierarchy: Large, clear call-to-action
- Contrast: Blue button stands out against white background
- Minimal text to respect time-conscious user

#### Mockup 2: Booking Form - Calendar View

**Key Elements:**

- Service selection dropdown (quick selection)
- Interactive calendar showing available dates
- Time slot selection interface
- Only displays currently available times
- Progress indicator showing step (1 of 3)

**User Action:** Sarah selects checkup service and available appointment slot for this week

**Design Principles Applied:**

- Scale: Larger interactive elements for easy clicking
- Layout: Logical flow from service → date → time
- Balance: Equal visual weight to important form fields

#### Mockup 3: Confirmation - Success State

**Key Elements:**

- Success checkmark and confirmation message
- All appointment details displayed clearly
- Confirmation email notification
- "Return to Home" button
- Additional appointment booking option

**User Action:** Sarah receives confirmation and can optionally book another service

**Design Principles Applied:**

- Visual hierarchy: Success indicator at top
- Consistency: Same color scheme and typography
- Accessibility: Clear status messaging

---

### STORYBOARD 2: Marcus Johnson's Journey

_"Exploration & Education Flow - Warm Green Design"_

**Visual Design Theme:**

- Primary Color: Green (#10b981)
- Secondary Color: Warm Beige (#f3f4f6)
- Style: Warm, informative, trust-building
- Typography: Mix of serif and sans-serif, traditional feel
- Layout: Information-rich, detailed descriptions

**Storyboard Sequence (3 Mockups):**

#### Mockup 1: Services Information Page

**Key Elements:**

- Comprehensive service cards with detailed descriptions
- Clear pricing for each service type
- Service icons for visual identification
- "Learn More" buttons for deeper information
- FAQ section addressing common questions
- Testimonials from existing clients

**User Action:** Marcus explores all available services and reads descriptions

**Design Principles Applied:**

- Visual hierarchy: Information organized by service type
- Balance: Equal emphasis on all service options
- Typography: Clear headings and body text

#### Mockup 2: Service Details - Educational Content

**Key Elements:**

- Expanded service description with benefits
- What to expect during the appointment
- Typical cost breakdown and duration
- Common questions about the service
- Customer testimonials and reviews
- Related services recommendations

**User Action:** Marcus learns about dental cleaning service (new to him as a new pet owner)

**Design Principles Applied:**

- Layout: Vertical scrolling with clear sections
- Contrast: Different background colors for sections
- Scale: Larger text for important information

#### Mockup 3: Contact & Booking Confirmation

**Key Elements:**

- Multiple contact methods (phone, email, in-person)
- "Meet the Veterinarians" section with credentials
- Reassurance about clinic expertise and care
- Simple booking form after information gathering
- Confirmation with detailed information packet option
- Follow-up contact information

**User Action:** Marcus feels confident about the clinic's expertise and books an appointment

**Design Principles Applied:**

- Trust-building: Credentials and testimonials visible
- Accessibility: Multiple contact options
- Clarity: Simple, clear confirmation message

---

## 4. HIGH-FIDELITY PROTOTYPE

### Implementation Technology

- **Framework:** React (TypeScript)
- **Styling:** Bootstrap 5 + Custom CSS
- **Build Tool:** React Scripts

### Design Choices Related to Storyboards

**Final Design Selection:**
The high-fidelity prototype implements a **hybrid design** that combines strengths from both storyboards:

1. **Primary Visual Theme:** Modern Blue (Storyboard 1)
   - Appeals to broader audience
   - Professional and trustworthy appearance
   - Clean, contemporary aesthetic

2. **Functional Depth:** Information-Rich (Storyboard 2)
   - Services page includes detailed descriptions
   - Contact information prominently displayed
   - Educative content about services

3. **Flexible Navigation:** Both User Types
   - Home page provides quick-booking path for Sarah
   - Services page available for Marcus's research needs
   - Both paths lead to the same booking interface

### Visual Design Principles Implemented

**a) Color Theme - Consistency**

- Primary: Blue (#2563eb) for trust and professionalism
- Secondary: Light Gray (#f1f5f9) for backgrounds
- Accents: Pink and Green for interactive elements
- Maintains consistency across all pages

**b) Typography**

- Headlines: Bold, sans-serif (1.5rem - 3rem)
- Body text: Sans-serif, 0.95-1rem
- Form labels: 0.95rem, bold, colored
- Clear hierarchy and readability

**c) Iconography**

- Emoji icons for pet reference (🐾 for clinic, 🐶🐱🐰 for hero)
- Icon cards for services (visual organization)
- Contact icons (📍 location, 📞 phone, ✉️ email)
- Confirmation icon (✅ success indication)

**d) Layout & Negative Space**

- Container-based layout for responsive design
- Generous padding and margins (1-4rem)
- Whitespace to reduce cognitive load
- Grid-based component arrangement

**e) Contrast, Scale, Balance, Visual Hierarchy**

- High contrast: Dark text on light backgrounds, colored buttons on white
- Scale variation: Large hero heading (3rem) vs small form labels
- Visual balance: Symmetrical layouts with proper alignment
- Hierarchy: CTAs > Headings > Body > Secondary text

### Key Features

1. **Home Page**
   - Hero section with value proposition
   - Services preview grid
   - Contact information cards
   - Why PawCare section with features

2. **Services Page**
   - Detailed service cards with descriptions and prices
   - Clear service organization
   - Easy booking transition

3. **Booking Page**
   - Multi-step form (service, pet info, owner info, date, time, email)
   - Validation for required fields
   - Clear form organization

4. **Confirmation Page**
   - Success state with all booking details
   - Email confirmation notification
   - Auto-reset after 5 seconds

5. **Responsive Design**
   - Mobile-first approach
   - Adjusts layouts for tablets and desktops
   - Touch-friendly interface elements

---

## 5. PORTFOLIO INTEGRATION

### Link to Portfolio

The high-fidelity prototype is accessible through the portfolio website:

**Primary Access:** Tony Li's Portfolio → Case Studies → Service Site  
**Direct Navigation:** Click "View Site" button on Service Site case study card

**Portfolio Location:** [Portfolio Homepage]  
**Service Site Component:** Integrated React component within main App

### Portfolio Description

The Service Site case study is displayed on the portfolio with:

- Thumbnail image
- Brief description of the project
- Link to interactive prototype
- Integration with portfolio's "How I Work" section

### Public Accessibility

The website and prototype are:

- Publicly accessible without authentication
- Optimized for desktop and mobile viewing
- Responsive and user-friendly
- Fully functional appointment booking system

---

## 6. CODE REPOSITORY

**GitHub Repository:** [https://github.com/tonyli-300363068/seg3125-assignment2-service-site](https://github.com/tonyli-300363068/seg3125-assignment2-service-site)

**Repository Structure:**

```
seg3125-assignment1-portfolioentrypage-tonyli-300363068/
├── src/
│   ├── components/
│   │   └── ServiceSite.tsx          # Main service site component
│   ├── styles/
│   │   └── ServiceSite.css          # Component styling
│   ├── App.tsx                       # Main app with routing
│   ├── App.css                       # App styling
│   └── index.tsx                     # Entry point
├── public/
├── package.json                      # Dependencies
├── ASSIGNMENT2_PERSONAS_STORYBOARDS.md
├── ASSIGNMENT2_REPORT.md             # This file
└── README.md
```

**Key Files:**

- `src/components/ServiceSite.tsx` - Main interactive component (350+ lines)
- `src/styles/ServiceSite.css` - Professional styling (400+ lines)
- `src/App.tsx` - Portfolio integration
- Documentation files for personas and design process

---

## 7. GENERATIVE AI ACKNOWLEDGEMENT

### Generative AI Usage in This Assignment

#### a) Mockup Design & Ideation

**Tools Used:** ChatGPT, Claude  
**Interaction:**

- Discussed visual design principles for two distinct storyboard themes
- Brainstormed persona characteristics and goals
- Explored layout options for different user types
- Generated color palettes and typography suggestions

**Role in Process:**

- Provided inspiration for design direction
- Validated design choices against UCD principles
- Offered suggestions for alternative visual themes
- Helped refine user personas with realistic characteristics

#### b) High-Fidelity Prototype Development

**Tools Used:** GitHub Copilot, ChatGPT (for React patterns)  
**Interaction:**

- Requested React component structure for multi-page interface
- Asked for TypeScript interface definitions
- Generated initial form validation logic
- Provided styling approaches for responsive design
- Assisted with CSS Grid/Flexbox layouts

**Role in Process:**

- Accelerated component development (estimated 30% time savings)
- Provided best practices for React state management
- Generated boilerplate code that was customized
- Helped with responsive design media queries
- Assisted with accessibility considerations

**Customizations Made:**

- Rewrote appointment confirmation logic for better UX
- Enhanced styling for visual hierarchy
- Added animations and transitions
- Implemented responsive navigation
- Custom color scheme and typography

#### c) Report Writing

**Tools Used:** ChatGPT, Claude  
**Interaction:**

- Structured report outline based on assignment requirements
- Generated initial content for sections
- Provided design principle explanations
- Helped articulate design choices

**Role in Process:**

- Organized information logically
- Ensured all required sections were included
- Provided formatting suggestions
- Generated initial drafts that were heavily edited

**Customizations Made:**

- All persona descriptions were refined based on realistic user scenarios
- Design principle explanations were custom-tailored to this specific project
- All technical descriptions were verified and updated
- Personal insights about design choices were added throughout
- Final report reflects the actual design implementation

### Summary of GenAI Contribution

GenAI tools provided approximately **40% assistance** with:

- Initial ideation and brainstorming (60%)
- Code generation for boilerplate (50%)
- Report writing and organization (40%)
- Testing and refinement suggestions (30%)

**Critical Decision Making:**
All final decisions regarding design, functionality, and implementation were made by the student designer, including:

- Selection of service business type
- Final persona definitions
- Visual design theme selection
- Component architecture
- User interaction flows
- Styling and animations
- All customizations and refinements

The GenAI tools served as assistants to accelerate development and provide suggestions, while the designer maintained creative control and ensured the final product aligned with UCD principles and assignment requirements.

---

## DESIGN PROCESS & REFLECTION

### Process Overview

1. **Analysis** - Selected veterinary clinic as service business
2. **Research** - Developed two distinct personas with different goals
3. **Ideation** - Created two visually different storyboards
4. **Design** - Implemented high-fidelity prototype combining best elements
5. **Integration** - Connected prototype to existing portfolio
6. **Documentation** - Documented design choices and UCD approach

### Key Design Decisions

- **Blue theme selection:** Professional, trustworthy, modern aesthetic appeals to Sarah
- **Information depth:** Services page accommodates Marcus's research needs
- **Flexible navigation:** Home page allows quick booking (Sarah) or service exploration (Marcus)
- **Responsive design:** Ensures usability on mobile and desktop devices

### UCD Principles Applied

- ✓ User research through personas
- ✓ Iterative design (two storyboards)
- ✓ User goal alignment (booking vs. research)
- ✓ Visual design principles (hierarchy, contrast, balance)
- ✓ Accessibility (keyboard navigation, color contrast)
- ✓ Responsive design (mobile-first)

---

## CONCLUSION

The PawCare Veterinary Clinic service website successfully demonstrates User-Centered Design principles through:

1. **Personas** that represent real user types and goals
2. **Storyboards** that show different interaction paths
3. **High-fidelity prototype** combining design aesthetics with functionality
4. **Visual design** guided by established principles
5. **Responsive implementation** accessible across devices

The prototype addresses the needs of both "quick bookers" like Sarah and "researchers" like Marcus, providing a comprehensive service business website suitable for appointment-based veterinary services.

---

**Submission Date:** June 5, 2026  
**Designer:** Tony Li (300363068)  
**Course:** SEG3125 - User Interface Analysis and Design  
**Institution:** University of Ottawa
