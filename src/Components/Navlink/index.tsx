import { motion } from "framer-motion";
import { NavLink } from "@mantine/core";

interface NavLinkItemProps {
  index: number;
  active: number;
  label: string;
  icon: React.ComponentType<any>; 
  onClick: () => void;
  disabled?: boolean;
}

function NavLinkItem({
  index,
  active,
  label,
  icon: Icon,
  onClick,
  disabled = false,
}: NavLinkItemProps) {
  return (
    <motion.div
      key={`${label}-${index}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <NavLink
        variant="subtle"
        color="indigo"
        active={index === active}
        label={label}
        icon={<Icon size={20} stroke={1.5} />}
        disabled={disabled}
        onClick={onClick}
        style={{
          padding: "10px 15px",
          borderRadius: "8px",
          marginBottom: "8px",
          backgroundColor: index === active ? "#EEF2FF" : "transparent",
          color: index === active ? "#4F46E5" : "#4A5568",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
        }}
      />
    </motion.div>
  );
}

export default NavLinkItem;
