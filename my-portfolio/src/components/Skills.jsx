import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

// Example Icons (from react-icons) - replace these or add your own images/icons
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiMongodb, SiNodedotjs, SiPython, SiFirebase } from 'react-icons/si';
import { FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiAdobexd, SiAdobephotoshop, SiJest } from 'react-icons/si';

// ----- Styled Components ----- //
const SkillsSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(10, 2),
  background: theme.palette.background.default,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 700,
  marginBottom: theme.spacing(4),
  color: theme.palette.mode === 'dark' ? '#C9C7BA' : '#9D1F15', // Example dynamic color
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4),
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
}));

const SkillCard = styled(Card)(({ theme }) => ({
  width: 100,
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  backgroundColor: theme.palette.mode === 'dark' ? '#29292B' : '#FBF7BA',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const SkillIconWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const SkillIconStyle = {
  fontSize: '2.5rem',
};

const SkillLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  marginBottom: theme.spacing(2),
}));

// ----- Data for Skills ----- //
const frontEndSkills = [
  { name: 'JavaScript', icon: <SiJavascript style={SkillIconStyle} /> },
  { name: 'React', icon: <FaReact style={SkillIconStyle} /> },
  { name: 'Redux', icon: <SiRedux style={SkillIconStyle} /> },
  { name: 'HTML5', icon: <FaHtml5 style={SkillIconStyle} /> },
  { name: 'CSS3', icon: <FaCss3Alt style={SkillIconStyle} /> },
  { name: 'Sass', icon: <FaSass style={SkillIconStyle} /> },
  { name: 'Bootstrap', icon: <FaBootstrap style={SkillIconStyle} /> },
];

const backEndSkills = [
  { name: 'MongoDB', icon: <SiMongodb style={SkillIconStyle} /> },
  { name: 'Node.js', icon: <SiNodedotjs style={SkillIconStyle} /> },
  { name: 'Python', icon: <SiPython style={SkillIconStyle} /> },
  { name: 'Firebase', icon: <SiFirebase style={SkillIconStyle} /> },
];

const otherSkills = [
  { name: 'Git', icon: <FaGitAlt style={SkillIconStyle} /> },
  { name: 'Adobe XD', icon: <SiAdobexd style={SkillIconStyle} /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop style={SkillIconStyle} /> },
  { name: 'Linux', icon: <FaLinux style={SkillIconStyle} /> },
  { name: 'Jest', icon: <SiJest style={SkillIconStyle} /> },
];

// ----- Main Skills Component ----- //
export const Skills = () => {
  const theme = useTheme();

  return (
    <SkillsSection id="skills">
      <SectionTitle variant="h3">SKILLS</SectionTitle>

      {/* Front-end Skills */}
      <CategoryTitle variant="h5">Front-end</CategoryTitle>
      <Grid container spacing={3} justifyContent="center">
        {frontEndSkills.map((skill) => (
          <Grid item key={skill.name}>
            <SkillCard>
              <SkillIconWrapper>{skill.icon}</SkillIconWrapper>
              <SkillLabel variant="body1">{skill.name}</SkillLabel>
            </SkillCard>
          </Grid>
        ))}
      </Grid>

      {/* Back-end Skills */}
      <CategoryTitle variant="h5">Back-end</CategoryTitle>
      <Grid container spacing={3} justifyContent="center">
        {backEndSkills.map((skill) => (
          <Grid item key={skill.name}>
            <SkillCard>
              <SkillIconWrapper>{skill.icon}</SkillIconWrapper>
              <SkillLabel variant="body1">{skill.name}</SkillLabel>
            </SkillCard>
          </Grid>
        ))}
      </Grid>

      {/* Other Skills */}
      <CategoryTitle variant="h5">Other</CategoryTitle>
      <Grid container spacing={3} justifyContent="center">
        {otherSkills.map((skill) => (
          <Grid item key={skill.name}>
            <SkillCard>
              <SkillIconWrapper>{skill.icon}</SkillIconWrapper>
              <SkillLabel variant="body1">{skill.name}</SkillLabel>
            </SkillCard>
          </Grid>
        ))}
      </Grid>
    </SkillsSection>
  );
};
 