import { AdminHeaderComp } from "../components/commonComponents/SmallComponents";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import ConfigurationSectionsSidebar from "../components/adminCustomerPageComp/ConfigurationSectionsSidebar";
import GeneralConfigurationPanel from "../components/adminCustomerPageComp/GeneralConfigurationPanel";
import StoreOperationalModePanel from "../components/adminCustomerPageComp/StoreOperationalModePanel";
import TelemetryAlertsPanel from "../components/adminCustomerPageComp/TelemetryAlertsPanel";
import SecuritySettingsPanel from "../components/adminCustomerPageComp/SecuritySettingsPanel";

function AdminSettingPage() {
  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <div>
          <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
            <AdminHeaderComp
              heading="System Settings"
              text="Configure store and system preferences across global commerce clusters and local node parameters"
            />
          </ErrorBoundary>
        </div>

        <div className="grid grid-cols-7 gap-5">
          <div className="col-span-2">
            <ErrorBoundary
              fallback={
                <div>Configuration Sections Sidebar Component Fatta!</div>
              }
            >
              <ConfigurationSectionsSidebar />
            </ErrorBoundary>
          </div>

          <div className="col-span-5 space-y-5">
            <ErrorBoundary
              fallback={<div>General Configuration Panel Component Fatta!</div>}
            >
              <GeneralConfigurationPanel />
            </ErrorBoundary>

            <ErrorBoundary
              fallback={<div>General Configuration Panel Component Fatta!</div>}
            >
              <StoreOperationalModePanel />
            </ErrorBoundary>

            <ErrorBoundary
              fallback={<div>Telemetry Alerts Panel Component Fatta!</div>}
            >
              <TelemetryAlertsPanel />
            </ErrorBoundary>

            <ErrorBoundary
              fallback={<div>Security Settings Panel Component Fatta!</div>}
            >
              <SecuritySettingsPanel />
            </ErrorBoundary>
          </div>
        </div>
      </section>
    </>
  );
}
export default AdminSettingPage;
