const Dashboard = () => {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-slate-300" />
        <div className="aspect-video rounded-xl bg-slate-300" />
        <div className="aspect-video rounded-xl bg-slate-300" />
        <div className="aspect-video rounded-xl bg-muted/100" />
        <div className="aspect-video rounded-xl bg-muted/100" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </>
  );
};

export default Dashboard;
