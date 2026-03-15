import { Calendar, Users, Star, Award } from 'lucide-react';

interface StatCard {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  accent?: string;
  bordered?: boolean;
  goldBorder?: boolean;
}

function StatCard({ icon, value, label, goldBorder }: StatCard) {
  return (
    <div
      className={`flex items-center gap-4 p-5 rounded-2xl bg-white/3 transition-all hover:bg-white/8 ${
        goldBorder ? 'border border-amber-500/60' : 'border border-white/10'
      }`}
    >
      <div className="shrink-0">{icon}</div>
      <div>
        <p className="text-2xl font-bold text-white leading-tight">{value}</p>
        <p className="text-sm text-gray-400 mt-0.5">{label}</p>
      </div>
    </div>
  );
}

export default function StatCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <StatCard
        icon={
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-indigo-400" />
          </div>
        }
        value={12}
        label="Events Attended"
      />
      <StatCard
        icon={
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-purple-400" />
          </div>
        }
        value={3}
        label="Clubs Joined"
      />
      <StatCard
        icon={
          <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
            <Star className="w-5 h-5 text-pink-400" />
          </div>
        }
        value={450}
        label="Engagement Points"
      />
      <StatCard
        icon={
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Award className="w-5 h-5 text-amber-400" />
          </div>
        }
        value="Gold"
        label="Member Status"
        goldBorder
      />
    </div>
  );
}
