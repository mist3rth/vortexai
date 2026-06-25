import { Component, ErrorInfo, ReactNode } from "react";
import { Shield } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-8 rounded-2xl bg-red-950/20 border border-red-500/30 text-center my-6 max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-4 border border-red-500/20">
            <Shield size={24} />
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">Composant indisponible</h3>
          <p className="text-xs text-neutral-400 max-w-md mx-auto mb-4">
            Une erreur interne s'est produite lors du chargement de cette section. Nos ingénieurs ont été notifiés.
          </p>
          {process.env.NODE_ENV === "development" && (
            <pre className="text-[10px] text-red-400 bg-black/40 p-3 rounded text-left overflow-auto font-mono max-h-40">
              {this.state.error?.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
